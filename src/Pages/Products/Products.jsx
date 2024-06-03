import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  console.log(products);
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
          {products.map((product) => (
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
                    alt="UI/UX Review Check"
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
      </div>
    </div>
  );
};

export default Products;
