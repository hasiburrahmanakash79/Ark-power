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
    fetch("http://localhost:3000/hero-images")
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
                backgroundImage: `url(${image.url})`, // Dynamically set background image from API data
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




  // return (
  //   <div className="md:h-screen">
  //     <Swiper
  //       className="mySwiper "
  //       pagination={{
  //         dynamicBullets: true,
  //       }}
  //       autoplay={{
  //         delay: 3000, // Set autoplay delay to 2 seconds (2000 milliseconds)
  //         disableOnInteraction: false,
  //       }}
  //       navigation={true} // Enable navigation
  //       modules={[Pagination, Autoplay, Navigation]} // Add Navigation to modules
  //     >
  //       <SwiperSlide>
  //         <div className="bg-[url('https://t4.ftcdn.net/jpg/05/83/56/37/360_F_583563752_xDMCBAridvFzOCjEBJKjiZKXjtJIfZQF.jpg')] bg-cover">
  //           <div className="md:min-h-screen bg-black text-white bg-opacity-50">
  //             <HeroContentOne/>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className="bg-[url('https://tafepower.com/assets/images/tafe-power-genset-banner-1.jpg')] bg-cover">
  //           <div className="md:min-h-screen bg-black text-white bg-opacity-50">
  //           <HeroContentOne/>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className="bg-[url('https://www.pramaindia.in/wp-content/uploads/2023/06/Website_Banner-17-min.jpg')] bg-cover">
  //           <div className="md:min-h-screen bg-black text-white bg-opacity-50">
  //           <HeroContentOne/>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className="bg-[url('https://www.honnypower.com/Uploads/201705/banner01.jpg')] bg-cover">
  //           <div className="md:min-h-screen bg-black text-white bg-opacity-50">
  //           <HeroContentOne/>
  //           </div>
  //         </div>
  //       </SwiperSlide>
  //     </Swiper>
  //   </div>
  // );