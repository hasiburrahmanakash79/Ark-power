// import { Editor } from "@tinymce/tinymce-react";
// import axios from "axios";
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

// const AddNews = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//   } = useForm();

//   const getCurrentDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     const day = String(today.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   useEffect(() => {
//     // Set the default date to today's date
//     setValue("date", getCurrentDate());
//   }, [setValue]);

//   const img_hosting_token = import.meta.env.VITE_img_hosting_key;
//   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("image", data.imageUrl[0]);
//     fetch(img_hosting_url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((imageResponse) => {
//         console.log(imageResponse);
//         if (imageResponse.success) {
//           if (imageResponse.success) {
//             const imageUrl = imageResponse.data.display_url;
//             const { details, date, Category, title } = data;
//             const addNews = {
//               Category,
//               title,
//               date,
//               details,
//               imageUrl,
//             };
//             axios.post("https://ark-power-server.vercel.app/news", addNews).then((data) => {
//               if (data.data.insertedId) {
//                 reset();
//                 Swal.fire({
//                   showConfirmButton: false,
//                   timer: 1500,
//                   title: "News added Successful",
//                   icon: "success",
//                 });
//               }
//             });
//           }
//         }
//       });
//   };

//   return (
//     <div className="w-full">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Add News</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Title</label>
//           <input
//             type="text"
//             {...register("title", { required: true })}
//             placeholder="Title"
//             className={`w-96 p-2 mt-1 border rounded ${
//               errors.title ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm mt-1">Title is required</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Category</label>
//           <select
//             {...register("Category", { required: true })}
//             className={`w-full p-2 mt-1 border rounded ${
//               errors.Category ? "border-red-500" : "border-gray-300"
//             }`}
//           >
//             <option disabled>Select one</option>
//             <option value="News">News</option>
//             <option value="Events">Events</option>
//           </select>
//           {errors.Category && (
//             <p className="text-red-500 text-sm mt-1">Category is required</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Date</label>
//           <input
//             type="date"
//             {...register("date", { required: true })}
//             className={`w-full p-2 mt-1 border rounded ${
//               errors.date ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.date && (
//             <p className="text-red-500 text-sm mt-1">Date is required</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Image</label>
//           <input
//             type="file"
//             {...register("imageUrl", { required: true })}
//             placeholder="Image URL"
//             className={`w-full p-2 mt-1 border rounded ${
//               errors.imageUrl ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.imageUrl && (
//             <p className="text-red-500 text-sm mt-1">Image URL is required</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Details</label>
//           <textarea
//             {...register("details", { required: true })}
//             placeholder="Details"
//             className={`w-full p-2 mt-1 border rounded ${
//               errors.details ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.details && (
//             <p className="text-red-500 text-sm mt-1">Details are required</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//         >
//           Add News
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddNews;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { HiCamera } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const AddNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Set the default date to today's date
    setValue("date", getCurrentDate());
  }, [setValue]);

  const img_hosting_token = import.meta.env.VITE_img_hosting_key;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.imageUrl[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const { details, date, Category, title } = data;
          const addNews = {
            Category,
            title,
            date,
            details,
            imageUrl,
          };
          axios
            .post("https://ark-power-server.vercel.app/news", addNews)
            .then((response) => {
              if (response.data.insertedId) {
                reset();
                Swal.fire({
                  showConfirmButton: false,
                  timer: 1500,
                  title: "News added Successfully",
                  icon: "success",
                });
              }
            });
        }
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Set the image preview
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add News</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image Section */}
        <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Product Image
          </label>
          <div className="w-full flex justify-center mb-4">
            <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center relative">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <HiCamera className="text-gray-400 text-4xl" />
              )}
              {errors.imageUrl && (
                <p className="text-red-500 text-xs mt-1">Image is required</p>
              )}
            </div>
          </div>
          <input
            type="file"
            {...register("imageUrl", { required: true })}
            onChange={handleImageChange}
            className={`w-full p-2 border rounded ${
              errors.imageUrl ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Other Fields Section */}
        <div className="space-y-6 col-span-1 md:col-span-1">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Title"
              className={`w-full p-2 border rounded ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <select
              {...register("Category", { required: true })}
              className={`w-full p-2 border rounded ${
                errors.Category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option disabled>Select one</option>
              <option value="News">News</option>
              <option value="Events">Events</option>
            </select>
            {errors.Category && (
              <p className="text-red-500 text-sm mt-1">Category is required</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                {...register("date", { required: true })}
                className={`w-full p-3 pl-10 border rounded-lg shadow-sm transition duration-150 ease-in-out ${
                  errors.date ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">Date is required</p>
            )}
          </div>
        </div>

        {/* Details Field */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Details</label>
          <textarea
            {...register("details", { required: true })}
            placeholder="Details"
            className={`w-full p-2 border rounded ${
              errors.details ? "border-red-500" : "border-gray-300"
            }`}
            rows="6"
          />
          {errors.details && (
            <p className="text-red-500 text-sm mt-1">Details are required</p>
          )}
        </div>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default AddNews;
