import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const img_hosting_token = import.meta.env.VITE_img_hosting_key;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const BannerContent = () => {
  const [images, setImages] = useState([]); 
  const [showModal, setShowModal] = useState(false); 
  const [newImage, setNewImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(""); 
  const [text, setText] = useState("");  
  const [editingImageId, setEditingImageId] = useState(null);  

  // Fetch images from MongoDB API
  useEffect(() => {
    fetch("https://ark-power-server.vercel.app/hero-images")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setImages(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  // Handle image selection for new or updated image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!newImage || !text) {
      Swal.fire("Error", "Please provide an image and text.", "error");
      return;
    }

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
      formData.append("image", newImage);

      // Upload image to imgbb
      const uploadResponse = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imageResponse = await uploadResponse.json();

      if (imageResponse.success) {
        const imageUrl = imageResponse.data.display_url;

        if (editingImageId) {
          const updateResponse = await fetch(
            `https://ark-power-server.vercel.app/hero-images/${editingImageId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ image: imageUrl, text }),
            }
          );
          const result = await updateResponse.json();

          if (result.matchedCount > 0 && result.modifiedCount > 0) {
            setImages((prevImages) =>
              prevImages.map((img) =>
                img._id === editingImageId
                  ? { ...img, image: imageUrl, text }
                  : img
              )
            );
            Swal.fire("Updated", "Image updated successfully!", "success");
          } else {
            Swal.fire("Error", "Failed to update the image.", "error");
          }
        } else {
          const newImageData = {
            image: imageUrl,
            text, 
          };
          const saveResponse = await fetch(
            "https://ark-power-server.vercel.app/hero-images",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newImageData),
            }
          );
          const result = await saveResponse.json();
          if (result.insertedId) {
            setImages([...images, newImageData]); // Update the images state with the new image
            Swal.fire("Success", "Image uploaded successfully!", "success");
          } else {
            Swal.fire("Error", "Failed to save image in database.", "error");
          }
        }
        setShowModal(false);
        setNewImage(null);
        setImagePreview("");
        setText("");
        setEditingImageId(null);
      } else {
        Swal.fire(
          "Error",
          `Failed to upload image: ${imageResponse.error}`,
          "error"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire(
        "Error",
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
    }
  };

  // Open modal for adding a new image
  const handleAddImage = () => {
    setShowModal(true);
    setNewImage(null);
    setImagePreview("");
    setText("");
    setEditingImageId(null);
  };

  // Open modal for updating an existing image
  const handleEditImage = (image) => {
    setShowModal(true);
    setNewImage(null);
    setImagePreview(image.image);
    setText(image.text || ""); 
    setEditingImageId(image._id); 
  };

  // Handle image deletion
  const handleDelete = async (image) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      try {
        const deleteResponse = await fetch(
          `https://ark-power-server.vercel.app/hero-images/${image._id}`,
          {
            method: "DELETE",
          }
        );

        const result = await deleteResponse.json();

        if (result.deletedCount > 0) {
          setImages((prevImages) =>
            prevImages.filter((img) => img._id !== image._id)
          );
          Swal.fire("Deleted!", "Your image has been deleted.", "success");
        } else {
          Swal.fire(
            "Error",
            "Failed to delete the image from the database.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error deleting image:", error);
        Swal.fire("Error", `An error occurred: ${error.message}`, "error");
      }
    }
  };

  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold">Banner Images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden text-center hover:shadow-xl"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image.image}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CardHeader>
            <CardBody>
              <button
                onClick={() => handleEditImage(image)} // Open modal to edit image
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mt-2"
              >
                Change Image
              </button>
              <button
                onClick={() => handleDelete(image)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200 mt-2 ms-3"
              >
                Delete Image
              </button>
            </CardBody>
          </Card>
        ))}

        {/* Plus button to open modal */}
        <Link
          onClick={handleAddImage} // Open modal to add a new image
          className="overflow-hidden flex justify-center items-center text-center border bg-gray-50 m-0 rounded-xl shadow-lg text-5xl text-gray-600"
        >
          <FaPlus />
        </Link>

        {/* Modal for image upload or edit */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">
                {editingImageId ? "Update Image" : "Upload New Image"}
              </h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mb-4 w-full h-32 object-cover"
                />
              )}
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter image description"
                className="block w-full mb-4 p-2 border rounded"
              />
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200 w-full"
              >
                {editingImageId ? "Update" : "Submit"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-red-500 font-bold py-2 mt-2 w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerContent;





// import React, { useState, useEffect } from "react";
// import { Card, CardBody, CardHeader } from "@material-tailwind/react";
// import Swal from "sweetalert2"; // Ensure you import SweetAlert2
// import { Link } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";

// const img_hosting_token = import.meta.env.VITE_img_hosting_key;
// const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

// const BannerContent = () => {
//   const [images, setImages] = useState([]); // Store array of images
//   const [showFileInput, setShowFileInput] = useState(''); // Track which card's file input is visible
//   const [uploading, setUploading] = useState(false); // Track uploading state

//   // Fetch images from MongoDB API
//   useEffect(() => {
//     fetch("https://ark-power-server.vercel.app/hero-images")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && Array.isArray(data)) {
//           setImages(data); // Assuming data is an array of image objects
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching the images:", error);
//       });
//   }, []);

//   // Handle image selection
//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file); // Create a preview URL
//       const updatedImages = [...images];
//       updatedImages[index].file = file; // Store selected file in the corresponding card's data
//       updatedImages[index].preview = imageUrl; // Set the preview URL for the selected image
//       setImages(updatedImages); // Update the state
//     }
//   };

//   const handleUpdateImage = async (index, id) => {
//     const imageFile = images[index].file;
//     if (!imageFile) return;

//     setUploading(true);

//     Swal.fire({
//       title: "Uploading...",
//       allowOutsideClick: false,
//       showConfirmButton: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const formData = new FormData();
//       formData.append("image", imageFile);

//       const uploadResponse = await fetch(img_hosting_url, {
//         method: "POST",
//         body: formData,
//       });
//       const imageResponse = await uploadResponse.json();

//       console.log('Upload Response:', imageResponse);

//       if (imageResponse.success) {
//         const imageUrl = imageResponse.data.display_url;

//         console.log('Image URL to update:', imageUrl);

//         Swal.fire({
//           title: "Updating...",
//           allowOutsideClick: false,
//           showConfirmButton: false,
//           didOpen: () => {
//             Swal.showLoading();
//           },
//         });

//         const updateResponse = await fetch(`https://ark-power-server.vercel.app/hero-images/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ image: imageUrl }), // Send image URL
//         });
//         const data = await updateResponse.json();

//         console.log('Update Response:', data);

//         if (data.matchedCount > 0 && data.modifiedCount > 0) {
//           const updatedImages = [...images];
//           updatedImages[index].image = imageUrl;
//           setImages(updatedImages);
//           setShowFileInput(null); // Reset the file input after successful update
//           Swal.fire("Updated!", "The image has been updated.", "success");
//         } else {
//           Swal.fire("Error", `Failed to update image in database: ${data.error || 'No changes made'}`, "error");
//         }
//       } else {
//         Swal.fire("Error", `Failed to upload image: ${imageResponse.error || 'Unknown error'}`, "error");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire("Error", `An unexpected error occurred: ${error.message}`, "error");
//     } finally {
//       setUploading(false); // Reset uploading state
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {images.map((image, index) => (
//         <Card key={index} className="overflow-hidden text-center hover:shadow-xl">
//           <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
//             <div className="relative h-44 overflow-hidden">
//               <img
//                 src={image.preview || image.image} // Show preview if available, else show the original image
//                 alt={`Image ${index}`}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//           </CardHeader>
//           <CardBody>
//             {!showFileInput && (
//               <button
//                 onClick={() => setShowFileInput(index)}
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
//               >
//                 Change
//               </button>
//             )}

//             {showFileInput === index && (
//               <div className="flex items-center justify-between gap-5">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(e, index)} // Pass index to identify which image to update
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                 />
//                 <button
//                   onClick={() => handleUpdateImage(index, image._id)} // Pass index and image id to update the correct image
//                   disabled={uploading} // Disable button during upload
//                   className={`bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200 ${uploading ? 'opacity-50' : ''}`}
//                 >
//                   {uploading ? "Updating..." : "Update"}
//                 </button>
//               </div>
//             )}
//           </CardBody>
//         </Card>
//       ))}
//       <Link className="overflow-hidden flex justify-center items-center text-center border bg-gray-50 m-0 rounded-xl shadow-lg text-5xl text-gray-600">
//         <FaPlus/>
//       </Link>
//     </div>
//   );
// };

// export default BannerContent;

