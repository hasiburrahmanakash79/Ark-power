import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import "./Hero.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import HeroContentOne from "./HeroContentOne";

const Hero = () => {
  return (
    <div className="">
      <Swiper
        className="mySwiper "
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000, // Set autoplay delay to 2 seconds (2000 milliseconds)
          disableOnInteraction: false,
        }}
        navigation={true} // Enable navigation
        modules={[Pagination, Autoplay, Navigation]} // Add Navigation to modules
      >
        <SwiperSlide>
          <div className="bg-[url('https://t4.ftcdn.net/jpg/05/83/56/37/360_F_583563752_xDMCBAridvFzOCjEBJKjiZKXjtJIfZQF.jpg')] bg-cover">
            <div className="md:ps-32 md:pb-20 pt-32 bg-black text-white bg-opacity-50">
              <HeroContentOne/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://tafepower.com/assets/images/tafe-power-genset-banner-1.jpg')] bg-cover">
            <div className="md:ps-32 md:pb-20 pt-32 bg-black text-white bg-opacity-50">
            <HeroContentOne/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://www.pramaindia.in/wp-content/uploads/2023/06/Website_Banner-17-min.jpg')] bg-cover">
            <div className="md:ps-32 md:pb-20 pt-32 bg-black text-white bg-opacity-50">
            <HeroContentOne/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://www.honnypower.com/Uploads/201705/banner01.jpg')] bg-cover">
            <div className="md:ps-32 md:pb-20 pt-32 bg-black text-white bg-opacity-50">
            <HeroContentOne/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
