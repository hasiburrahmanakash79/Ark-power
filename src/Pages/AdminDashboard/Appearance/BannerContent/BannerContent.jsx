import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Swal from "sweetalert2"; // Ensure you import SweetAlert2

const img_hosting_token = import.meta.env.VITE_img_hosting_key;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const BannerContent = () => {
  const [images, setImages] = useState([]); // Store array of images
  const [showFileInput, setShowFileInput] = useState(''); // Track which card's file input is visible
  const [uploading, setUploading] = useState(false); // Track uploading state

  // Fetch images from MongoDB API
  useEffect(() => {
    fetch("http://localhost:3000/hero-images")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setImages(data); // Assuming data is an array of image objects
        }
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  // Handle image selection
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a preview URL
      const updatedImages = [...images];
      updatedImages[index].file = file; // Store selected file in the corresponding card's data
      updatedImages[index].preview = imageUrl; // Set the preview URL for the selected image
      setImages(updatedImages); // Update the state
    }
  };

  
  const handleUpdateImage = async (index, id) => {
    const imageFile = images[index].file;
    if (!imageFile) return;
  
    setUploading(true);
  
    Swal.fire({
      title: "Uploading...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
  
      const uploadResponse = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imageResponse = await uploadResponse.json();
  
      console.log('Upload Response:', imageResponse);
  
      if (imageResponse.success) {
        const imageUrl = imageResponse.data.display_url;
  
        console.log('Image URL to update:', imageUrl);
  
        Swal.fire({
          title: "Updating...",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
  
        const updateResponse = await fetch(`http://localhost:3000/hero-images/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageUrl }), // Send image URL
        });
        const data = await updateResponse.json();
  
        console.log('Update Response:', data);
  
        if (data.matchedCount > 0 && data.modifiedCount > 0) {
          const updatedImages = [...images];
          updatedImages[index].image = imageUrl;
          setImages(updatedImages);
          setShowFileInput(updatedImages);
          Swal.fire("Updated!", "The image has been updated.", "success");
        } else {
          Swal.fire("Error", `Failed to update image in database: ${data.error || 'No changes made'}`, "error");
        }
      } else {
        Swal.fire("Error", `Failed to upload image: ${imageResponse.error || 'Unknown error'}`, "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", `An unexpected error occurred: ${error.message}`, "error");
    } finally {
      setUploading(true);
    }
  };
  
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden text-center text-red-500 hover:shadow-xl">
          <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
            <div className="relative h-44 overflow-hidden">
              <img
                src={image.preview || image.image} // Show preview if available, else show the original image
                alt={`Image ${index}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </CardHeader>
          <CardBody>
            {!showFileInput && (
              <button onClick={() => setShowFileInput(index)}>Change</button>
            )}

            {showFileInput === index && (
              <div className="mt-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)} // Pass index to identify which image to update
                  className="mb-2"
                />
                <button
                  onClick={() => handleUpdateImage(index, image._id)} // Pass index and image id to update the correct image
                  disabled={uploading} // Disable button during upload
                >
                  {uploading ? "Updating..." : "Update"}
                </button>
              </div>
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default BannerContent;

