import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

 

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
            const { name, description, pdfUrl} = data;
            const addProduct = {
              name,
              description,
              imageUrl,
              pdfUrl
            };
            axios.post("https://ark-power-server.vercel.app/products", addProduct).then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  showConfirmButton: false,
                  timer: 1500,
                  title: "Product added Successful",
                  icon: "success",
                });
              }
            });
          }
        }
      });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Product Input</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            {...register('name', { required: true })}
            className={`px-4 py-2 md:w-96 rounded-lg border-2 ${errors.productName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.productName && <p className="text-red-500 text-xs mt-1">Product name is required.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">Image</label>
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
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="pdfUrl">Product Catalog URL</label>
          <input
            type="text"
            id="pdfUrl"
            {...register('pdfUrl', { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${errors.pdfUrl ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.pdfUrl && <p className="text-red-500 text-xs mt-1">Product Catalog is required.</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="productDetails">Product Details</label>
          <textarea
            id="productDetails"
            {...register('description', { required: true })}
            className={`w-full px-4 py-2 rounded-lg border-2 ${errors.productDetails ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          ></textarea>
          {errors.productDetails && <p className="text-red-500 text-xs mt-1">Product details are required.</p>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
