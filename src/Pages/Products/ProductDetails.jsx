import React from "react";
import useProducts from "../../Hooks/useProducts";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";

const ProductDetails = () => {
  const [products, isLoading] = useProducts();
  const { id } = useParams();
  const productDetail = products.find((product) => product._id === id);
  console.log(productDetail);
  if (isLoading && products) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen container mx-auto">
      <div className="mt-24 ">
        <h1 className="text-primary text-center mb-12 text-5xl uppercase">
          {productDetail?.name}
        </h1>
        <div className="grid grid-cols-5 gap-16 ">
          <div className="col-span-2">
            <img
              src={productDetail?.imageUrl}
              alt={`Product Image`}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="col-span-3">
            <p className="text-gray-600">{productDetail?.description}</p>
            <div className="pt-10">
            <h4 className="text-xl font-bold text-gray-700 mb-2">PDF Link</h4>
            <a
              
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-bold text-gray-700 mb-2">
            Product Images
          </h4>
          <div className="flex flex-wrap gap-4">
            {/* {productDetail?.images.map((image, index) => (
              <img key={index} src={image} alt={`Product Image ${index + 1}`} className="w-32 h-32 object-cover rounded-lg" />
            ))} */}
          </div>
        </div>

        {productDetail?.pdfLink && (
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-700 mb-2">PDF Link</h4>
            <a
              href={productDetail?.pdfLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
