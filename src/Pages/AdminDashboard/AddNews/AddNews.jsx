// import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

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
        console.log(imageResponse);
        if (imageResponse.success) {
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
            axios.post("http://localhost:3000/news", addNews).then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  showConfirmButton: false,
                  timer: 1500,
                  title: "News added Successful",
                  icon: "success",
                });
              }
            });
          }
        }
      });
    // try {
    //   const response = await fetch("http://localhost:3000/news", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok === true) {
    //     const result = await response.json();
    //     console.log(result);
    //     reset();
    //     Swal.fire({
    //       showConfirmButton: false,
    //       timer: 1500,
    //       title: "Class added Successful",
    //       icon: "success",
    //     });
    //   } else {
    //     const errorText = await response.text();
    //     console.error("Error adding news:", errorText);
    //     alert("Failed to add news");
    //   }
    // } catch (error) {
    //   console.error("Error adding news:", error);
    //   alert("Failed to add news");
    // }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add News</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
            className={`w-full p-2 mt-1 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">Title is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            {...register("Category", { required: true })}
            className={`w-full p-2 mt-1 border rounded ${
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

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className={`w-full p-2 mt-1 border rounded ${
              errors.date ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">Date is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            {...register("imageUrl", { required: true })}
            placeholder="Image URL"
            className={`w-full p-2 mt-1 border rounded ${
              errors.imageUrl ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.imageUrl && (
            <p className="text-red-500 text-sm mt-1">Image URL is required</p>
          )}
        </div>
        

        <div className="mb-4">
          <label className="block text-gray-700">Details</label>
          <textarea
            {...register("details", { required: true })}
            placeholder="Details"
            className={`w-full p-2 mt-1 border rounded ${
              errors.details ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.details && (
            <p className="text-red-500 text-sm mt-1">Details are required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default AddNews;

{
  /* <Editor
            apiKey="yiugd3xtqtw63wiq4wpkyw9qx30b0gil37a9voubxh4evezq"
            {...register("details", { required: true })}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
              setup: (editor) => {
                editor.on('Change', () => {
                  setValue("details", editor.getContent());
                });
              },
            }}
          /> */
}
