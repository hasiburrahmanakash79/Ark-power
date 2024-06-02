// src/components/ProductSlider.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './Products';

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}
    >
      &#9654;
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
      onClick={onClick}
    >
      &#9664;
    </button>
  );
};

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/products.json');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  console.log(products);

  return (
    <div className="container mx-auto py-8 mt-32 relative">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <Products product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;

