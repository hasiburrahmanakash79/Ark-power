import React from "react";
import { useForm } from "react-hook-form";

const EditFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl shadow-lg p-8"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
          Update Footer Information
        </h2>

        {/* Address Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            id="address"
            {...register("address", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.address ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="3"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">Address is required.</p>
          )}
        </div>

        {/* Contact Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="contact"
          >
            Contact
          </label>
          <input
            type="text"
            id="contact"
            {...register("contact", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.contact ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.contact && (
            <p className="text-red-500 text-xs mt-1">
              Contact number is required.
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required.</p>
          )}
        </div>

        {/* Facebook URL Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="facebook"
          >
            Facebook URL
          </label>
          <input
            type="url"
            id="facebook"
            {...register("facebookUrl", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.facebookUrl ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.facebookUrl && (
            <p className="text-red-500 text-xs mt-1">
              Facebook URL is required.
            </p>
          )}
        </div>

        {/* YouTube URL Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="youtube"
          >
            YouTube URL
          </label>
          <input
            type="url"
            id="youtube"
            {...register("youtubeUrl", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.youtubeUrl ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.youtubeUrl && (
            <p className="text-red-500 text-xs mt-1">
              YouTube URL is required.
            </p>
          )}
        </div>

        {/* Instagram URL Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="instagram"
          >
            Instagram URL
          </label>
          <input
            type="url"
            id="instagram"
            {...register("instagramUrl", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.instagramUrl ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.instagramUrl && (
            <p className="text-red-500 text-xs mt-1">
              Instagram URL is required.
            </p>
          )}
        </div>

        {/* Twitter URL Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="twitter"
          >
            Twitter URL
          </label>
          <input
            type="url"
            id="twitter"
            {...register("twitterUrl", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.twitterUrl ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.twitterUrl && (
            <p className="text-red-500 text-xs mt-1">
              Twitter URL is required.
            </p>
          )}
        </div>

        {/* Telegram URL Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="telegram"
          >
            Telegram URL
          </label>
          <input
            type="url"
            id="telegram"
            {...register("telegramUrl", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.telegramUrl ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.telegramUrl && (
            <p className="text-red-500 text-xs mt-1">
              Telegram URL is required.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditFooter;
