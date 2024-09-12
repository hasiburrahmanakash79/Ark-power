import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BannerContent = () => {
    const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!imageFile) {
      Swal.fire('Error', 'Please select an image file', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const response = await fetch('http://localhost:3000/hero-images', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        Swal.fire('Success', 'Image updated successfully', 'success');
      } else {
        Swal.fire('Error', 'Failed to update image', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'An error occurred while updating the image', 'error');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="flex flex-col items-center">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mb-4 w-64 h-64 object-cover border rounded-md"
            />
          )}
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="mb-4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Update Image
        </button>
      </form>
    </div>
  );
};


export default BannerContent;