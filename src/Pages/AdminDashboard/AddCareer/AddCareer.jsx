import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddCareer = () => {
  const [editorContent, setEditorContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { title, email, category, seat } = data;
    const details = editorContent; // Get the content from the editor
    const addCareer = { details, email, title, category, seat };

    try {
      const response = await axios.post(
        "https://ark-power-server.vercel.app/career",
        addCareer
      );
      if (response.data.insertedId) {
        reset(); // Reset form fields
        setEditorContent(""); // Reset editor content
        Swal.fire({
          showConfirmButton: false,
          timer: 1500,
          title: "Career opportunity added successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error adding career:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to add career opportunity",
        icon: "error",
      });
    }
  };

  const handleChange = (value) => {
    setEditorContent(value);
  };

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      [
        { header: "1" },
        { header: "2" },
        "bold",
        "italic",
        "underline",
        "strike",
      ],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "indent",
    "color",
    "background",
    "link",
    "image",
  ];

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl mb-10 text-primary">
          Add Career Opportunity
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-8 rounded-xl shadow-lg bg-white"
      >
        <div className="grid grid-cols-2 gap-10">
          {/* Left side inputs */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Job Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Enter job title"
                className={`w-full p-3 border rounded-md ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">Title is required</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter contact email"
                className={`w-full p-3 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Contact email is required
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Available Position
              </label>
              <input
                type="number"
                {...register("seat", { required: true })}
                placeholder="Number of available positions"
                className={`w-full p-3 border rounded-md ${
                  errors.seat ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {errors.seat && (
                <p className="text-red-500 text-sm mt-1">
                  Available positions are required
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Job Category
              </label>
              <select
                {...register("category", { required: true })}
                className={`w-full p-3 border rounded-md ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              >
                <option value="" disabled>
                  Select job category
                </option>
                <option value="Job">Job</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  Job category is required
                </p>
              )}
            </div>
          </div>

          {/* Right side editor */}
          <div className="">
            <label className="block text-gray-700 font-semibold mb-2">
              Job Details
            </label>
            <ReactQuill
              value={editorContent}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              placeholder="Describe the job in detail..."
              className="h-72"
            />
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                Job details are required
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Career
        </button>
      </form>
    </div>
  );
};

export default AddCareer;
