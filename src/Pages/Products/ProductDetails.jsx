import React from "react";
import useProducts from "../../Hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";

const ProductDetails = () => {
  const {products, isLoading} = useProducts();
  const { id } = useParams();
  const productDetail = products.find((product) => product._id === id);
  console.log(productDetail);
  if (isLoading && products) {
    return <LoadingSpinner />;
  }
  const slicedProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen container mx-auto p-5">
      <div className="md:mt-24 mt-14">
        <div className="grid md:grid-cols-5 gap-16 ">
          <div className="md:col-span-2">
            <img
              src={productDetail?.imageUrl}
              alt={`Product Image`}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:col-span-3">
          <h1 className="text-primary mb-5 md:text-5xl text-3xl uppercase">
          {productDetail?.name}
        </h1>
            <p className="text-gray-600">{productDetail?.description}</p>
            <div className="pt-10">
              <h4 className="text-xl font-bold text-gray-700 mb-2">PDF Link</h4>
              <a
                href={productDetail?.pdfUrl}
                className="text-blue-500 hover:underline cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                download PDF
              </a>
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-4">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold text-gray-700 mb-10">Related Product</h2>
            <Link to='/products' className="p-3 border-2 uppercase font-semibold rounded border-black hover:bg-black hover:text-white">View More Product</Link>
          </div>
        <div className="grid md:grid-cols-3 gap-10 col-span-3">
          {slicedProducts.map((product) => (
            <Card
              key={product?._id}
              className="overflow-hidden p-1 border hover:shadow-xl"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Link to={`/ProductDetails/${product?._id}`}>
                  
                  <img
                    src={product?.imageUrl}
                    alt={product?.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  </Link>
                </div>
              </CardHeader>
              <CardBody>
                <div className="py-3">
                  <Link
                    to={`/ProductDetails/${product?._id}`}
                    className="md:text-xl text-black font-semibold text-sm"
                  >
                    {product?.name}
                  </Link>
                </div>
                <div>
                <Link to={`/ProductDetails/${product?._id}`}>{product?.description?.slice(0,100)}...<span  className="text-blue-700 hover:underline">
                    Read more
                    </span></Link>
                    
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
