import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [fileNames, setFileNames] = useState({
    image1: '',
    image2: '',
    image3: '',
    pdf: ''
  });

  const handleFileChange = (event, field) => {
    const files = event.target.files;
    setFileNames(prevState => ({
      ...prevState,
      [field]: files.length > 0 ? files[0].name : '',
    }));
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('productName', data.productName);
    formData.append('productDetails', data.productDetails);

    ['image1', 'image2', 'image3'].forEach((field, index) => {
      if (data[field].length > 0) {
        formData.append(`photos_${index}`, data[field][0]);
      }
    });
    if (data.pdfLink.length > 0) {
      formData.append('pdfLink', data.pdfLink[0]);
    }

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload');
      }

      const result = await response.json();
      console.log('Success:', result);
      Swal.fire({
        showConfirmButton: false,
        timer: 1500,
        title: 'Product added successfully',
        icon: 'success',
      });
      reset();
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        showConfirmButton: true,
        title: 'Error',
        text: 'Failed to add product',
        icon: 'error',
      });
    }
  };

  return (
    <div className="w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Product Input</h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            {...register('productName', { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${errors.productName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.productName && <p className="text-red-500 text-xs mt-1">Product name is required.</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="productDetails">Product Details</label>
          <textarea
            id="productDetails"
            {...register('productDetails', { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${errors.productDetails ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          ></textarea>
          {errors.productDetails && <p className="text-red-500 text-xs mt-1">Product details are required.</p>}
        </div>

        {['image1', 'image2', 'image3'].map((field, index) => (
          <div key={field} className="mb-6 w-full">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={field}>Product Image {index + 1}</label>
            <div className="flex items-center">
              <label className={`flex cursor-pointer items-center px-4 py-2 text-gray-700 border-gray-300 rounded-lg tracking-wide uppercase border-2 w-full ${fileNames[field] ? 'bg-slate-200' : ''}`}>
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
        ))}

        <div className="mb-6 w-full">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="pdfLink">PDF Link</label>
          <div className="flex items-center">
            <label className={`flex cursor-pointer items-center px-4 py-2 text-gray-700 border-gray-300 rounded-lg tracking-wide uppercase border-2 w-full ${fileNames.pdf ? 'bg-slate-200' : ''}`}>
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

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
