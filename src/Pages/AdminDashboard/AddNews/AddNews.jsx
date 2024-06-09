import React from "react";
import { useForm } from "react-hook-form";

const AddNews = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset()
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add News</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            {...register("Category", { required: true })}
            className={`w-full p-2 mt-1 border rounded ${errors.Category ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="News">News</option>
            <option value="Events">Events</option>
          </select>
          {errors.Category && <p className="text-red-500 text-sm mt-1">Category is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className={`w-full p-2 mt-1 border rounded ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">Date is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
            className={`w-full p-2 mt-1 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            {...register("imageUrl", { required: true })}
            placeholder="Image URL"
            className={`w-full p-2 mt-1 border rounded ${errors.imageUrl ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.imageUrl && <p className="text-red-500 text-sm mt-1">Image URL is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Details</label>
          <textarea
            {...register("details", { required: true })}
            placeholder="Details"
            className={`w-full p-2 mt-1 border rounded ${errors.details ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.details && <p className="text-red-500 text-sm mt-1">Details are required</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Add News
        </button>
      </form>
    </div>
  );
};

export default AddNews;
