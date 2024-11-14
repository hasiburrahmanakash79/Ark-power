import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import "./Hero.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import HeroContentOne from "./HeroContentOne";
import { useEffect, useState } from "react";

const Hero = () => {
  const [images, setImages] = useState([]);

  // Fetch images from MongoDB API
  useEffect(() => {
    fetch("https://ark-power-server.vercel.app/hero-images")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setImages(data); // Assuming data is an array of image objects
        }
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  return (
    <div className="md:h-screen">
      <Swiper
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000, // Set autoplay delay to 3 seconds
          disableOnInteraction: false,
        }}
        navigation={true} // Enable navigation
        modules={[Pagination, Autoplay, Navigation]} // Add Navigation to modules
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover"
              style={{
                backgroundImage: `url(${image.image})`, // Dynamically set background image from API data
              }}
            >
              <div className="md:min-h-screen bg-black text-white bg-opacity-50">
                <HeroContentOne />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;