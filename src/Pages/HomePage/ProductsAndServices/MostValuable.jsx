import React from "react";
import { Carousel } from "@material-tailwind/react";

const MostValuable = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://www.arkpowerltd.com.bd/assets/images/arkpower/products/Solar%20pump.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://www.arkpowerltd.com.bd/assets/images/arkpower/products/auto.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://www.arkpowerltd.com.bd/assets/images/arkpower/products/Transformer.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      </div>
    </div>
  );
};

export default MostValuable;
