import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:max-w-2xl bg-white rounded-3xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: true })}
              className={`w-full px-4 py-2 rounded-lg border-2 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                Full name is required.
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email Address
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
              className={`w-full px-4 py-2 rounded-lg border-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                Phone number is required.
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: true })}
              className={`w-full px-4 py-2 rounded-lg border-2 ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">Subject is required.</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">Message is required.</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
