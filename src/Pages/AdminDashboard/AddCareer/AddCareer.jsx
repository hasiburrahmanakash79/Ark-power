import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCareer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const { details, title, email, category, seat } = data;
    const addCareer = { details, email, title, category, seat };
  
    try {
      const response = await axios.post("https://ark-power-server.vercel.app/career", addCareer);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          showConfirmButton: false,
          timer: 1500,
          title: "News added successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };
  

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl my-5 text-primary">Add Career Opportunity</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
       <div className="mb-4">
          <label className="block text-gray-700">Job Title</label>
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
          <label className="block text-gray-700">Contact Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Contact Email"
            className={`w-full p-2 mt-1 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">Contact email is required</p>
          )}
        </div>
       <div className="mb-4">
          <label className="block text-gray-700">Available Position</label>
          <input
            type="number"
            {...register("seat", { required: true })}
            placeholder="Available Position"
            className={`w-full p-2 mt-1 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">Contact email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Job Category</label>
          <select
            {...register("category", { required: true })}
            className={`w-full p-2 mt-1 border rounded ${
              errors.Category ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option disabled>Select one</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.Category && (
            <p className="text-red-500 text-sm mt-1">Category is required</p>
          )}
        </div>
      <Editor
        apiKey="yiugd3xtqtw63wiq4wpkyw9qx30b0gil37a9voubxh4evezq"
        {...register("details", { required: true })}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          setup: (editor) => {
            editor.on("Change", () => {
              setValue("details", editor.getContent());
            });
          },
        }}
      />

      <button
        type="submit"
        className="w-full mt-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Add Career
      </button>
    </form>
    </div>
  );
};

export default AddCareer;
