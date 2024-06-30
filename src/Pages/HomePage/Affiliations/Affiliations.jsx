import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Affiliations = () => {
  const image = [
    {
      path: "https://www.riello-ups.com/",
      image:
        "https://www.sourceups.co.uk/wp-content/uploads/2019/05/Riello-Logo.png",
    },
    {
      path: "https://www.cet-power.com/",
      image:
        "https://www.cet-energrid.com/thumbor/mUotncmGLgmGSR9HpY2tJrK3ZN4=/fit-in/1024x/--/group-website-v1.s3.nl-ams.scw.cloud/uploads/sites/4/2020/11/CET-Power-Official-Large-e1605685451423.png",
    },
    {
      path: "https://www.fujitsu.com/global/",
      image: "https://www.fujitsu.com/imgv5/common/symbolmark.png",
    },
    {
      path: "https://www.aksapowergen.com/",
      image:
        "https://aksaeurope.com/Content/Upload/News/A%20New%20Era%20at%20Aksa%20Power%20Generation_96a44f8b-420f-4785-b74b-418ed2f0e7ea.jpg",
    },
    {
      path: "https://www.adckcl.com/in/en/index.html",
      image: "https://www.adckcl.com/in/en/assets/img/ADC-logo.png",
    },
    {
      path: "https://www.cet-power.com/",
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      path: "https://www.cet-power.com/",
      image: "https://www.arkpowerltd.com.bd/assets/images/arkpower/logo.jpg",
    },
    {
      path: "https://www.cet-power.com/",
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
      <h1 className="text-primary md:text-4xl text-2xl text-center mb-10">
        Foreign Affiliations
      </h1>
      <Slider {...settings}>
        {image.map((img, index) => (
          <a href={img?.path} key={index} className="px-7 pb-10">
            <img src={img.image} alt="" className="h-12 " />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Affiliations;
