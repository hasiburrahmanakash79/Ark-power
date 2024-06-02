import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Affiliations = () => {
  const image = [
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 mt-12 relative">
<h1 className="text-primary text-4xl text-center mb-10">Foreign Affiliations</h1>
      <Slider {...settings}>
        {image.map((img, index) => (
          <div key={index} className="px-5">
            <img src={img.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Affiliations;
