import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const [fileNames, setFileNames] = useState({ image1: '', image2: '', image3: '', pdf: '' });

  const handleFileChange = (event, field) => {
    const files = event.target.files;
    setFileNames((prevState) => ({
      ...prevState,
      [field]: files.length > 0 ? files[0].name : '',
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-96">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl shadow-lg p-8"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
          Product Input
        </h2>

        <div className="mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              {...register("productName", { required: true })}
              className={`w-full px-4 py-2 rounded-lg border-2 ${
                errors.productName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.productName && (
              <p className="text-red-500 text-xs mt-1">Product name is required.</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="productDetails">
            Product Details
          </label>
          <textarea
            id="productDetails"
            {...register("productDetails", { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${
              errors.productDetails ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          ></textarea>
          {errors.productDetails && (
            <p className="text-red-500 text-xs mt-1">Product details are required.</p>
          )}
        </div>

        {['image1', 'image2', 'image3'].map((field, index) => (
          <div key={field} className="mb-6 w-full">
            <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={field}>
              Product Image {index + 1}
            </label>
            <div className="flex items-center">
              <label
                className={`flex cursor-pointer items-center px-4 py-2 text-gray-700 border-gray-300 rounded-lg tracking-wide uppercase border-2 w-full ${
                  fileNames[field] ? 'bg-slate-200' : ''
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.88 10.73L9.5 17.88a1.51 1.51 0 01-1.06.44c-.41 0-.78-.15-1.06-.44l-5.88-5.88A3.73 3.73 0 010 8.5 3.75 3.75 0 014.28 4.7a3.77 3.77 0 012.9 1.12l.14.14a1.5 1.5 0 01-2.12 2.12l-.14-.14a1.28 1.28 0 00-1.9 1.7c.34.34.79.54 1.27.54s.93-.2 1.27-.54l5.88-5.88A1.5 1.5 0 0110.5 3c.41 0 .78.15 1.06.44l5.88 5.88a3.75 3.75 0 01-.56 5.41z" />
                </svg>
                <span className="leading-normal">{fileNames[field] || 'Select a file'}</span>
                <input
                  type="file"
                  id={field}
                  {...register(field, { required: true })}
                  className="hidden"
                  onChange={(event) => handleFileChange(event, field)}
                />
              </label>
            </div>
            {errors[field] && <p className="text-red-500 text-xs mt-1">Product image is required.</p>}
            </div>
          </div>
        ))}

        <div className="mb-6 w-full">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="pdfLink">
            PDF Link
          </label>
          <div className="flex items-center">
            <label
              className={`flex cursor-pointer items-center px-4 py-2 text-gray-700 border-gray-300 rounded-lg tracking-wide uppercase border-2 w-full ${
                fileNames.pdf ? 'bg-slate-200' : ''
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.88 10.73L9.5 17.88a1.51 1.51 0 01-1.06.44c-.41 0-.78-.15-1.06-.44l-5.88-5.88A3.73 3.73 0 010 8.5 3.75 3.75 0 014.28 4.7a3.77 3.77 0 012.9 1.12l.14.14a1.5 1.5 0 01-2.12 2.12l-.14-.14a1.28 1.28 0 00-1.9 1.7c.34.34.79.54 1.27.54s.93-.2 1.27-.54l5.88-5.88A1.5 1.5 0 0110.5 3c.41 0 .78.15 1.06.44l5.88 5.88a3.75 3.75 0 01-.56 5.41z" />
              </svg>
              <span className="leading-normal">{fileNames.pdf || 'Select a file'}</span>
              <input
                type="file"
                id="pdfLink"
                {...register('pdfLink', { required: true })}
                className="hidden"
                onChange={(event) => handleFileChange(event, 'pdf')}
              />
            </label>
          </div>
          {errors.pdfLink && <p className="text-red-500 text-xs mt-1">PDF link is required.</p>}
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

export default ProductForm;
