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
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="text"
        {...register("Category", { required: true })}
        placeholder="Category"
      />
      {errors.Category && <p>Category is required</p>}

      <input
        type="date"
        {...register("date", { required: true })}
        placeholder="Date"
      />
      {errors.date && <p>Date is required</p>}

      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Title"
      />
      {errors.title && <p>Title is required</p>}

      <input
        type="text"
        {...register("imageUrl", { required: true })}
        placeholder="Image URL"
      />
      {errors.imageUrl && <p>Image URL is required</p>}

      <textarea
        {...register("details", { required: true })}
        placeholder="Details"
      />
      {errors.details && <p>Details are required</p>}

      <button type="submit">Add News</button>
    </form>
  );
};

export default AddNews;
