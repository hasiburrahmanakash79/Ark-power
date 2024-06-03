import {
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  // Save current page to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // Calculate the indices for the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen container mx-auto bg-slate-50 flex items-center justify-center p-6">
      <div className="mt-24 ">
        <h1 className="text-primary text-center text-5xl uppercase">
          Our Products
        </h1>
        <p className="text-primary text-center mt-2 text-xl uppercase mb-16">
          We truly care about our customer
        </p>
        <div className="grid grid-cols-3 gap-10">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="py-3">
                  <Link
                    to="/"
                    className="md:text-xl text-black font-semibold text-sm"
                  >
                    {product.name}
                  </Link>
                </div>
                <div>
                  <span>
                    {product.description.slice(0, 100)}.....{" "}
                    <Link to={`/ProductDetails/${product.id}`} className="text-blue-700 hover:underline">
                      Read more
                    </Link>
                  </span>
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
