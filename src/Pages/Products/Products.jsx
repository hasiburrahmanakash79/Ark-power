import {
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import LoadingSpinner from "../../Hooks/Loading/LoadingSpinner";

const Products = () => {
  const { products, isLoading } = useProducts();
  
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const productsPerPage = 8;

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];


  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen container mx-auto bg-slate-50 flex items-center justify-center p-5">
      <div className="md:mt-24 mt-14">
        <h1 className="text-primary text-center md:text-5xl text-3xl uppercase">
          Our Products
        </h1>
        <p className="text-primary text-center md:mt-2 text-xl md:uppercase mb-10">
          We truly care about our customer
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-10">
          {currentProducts.map((product) => (
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
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-white text-blue-500 hover:bg-blue-300'}`}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`px-4 py-2 mx-1 border rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-300'}`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-white text-blue-500 hover:bg-blue-300'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
