import React, { useEffect, useState } from "react";

const Welcome = () => {
  const interval = 2500;

  const images = [
    "https://images.unsplash.com/photo-1624395149011-470cf6f6ec02?q=80&w=2851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624395148974-f929045c9093?q=80&w=2734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Automatically move to the next slide at the specified interval
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, interval]); // Re-run effect when currentIndex or interval changes

  return (
    <div>
      <h1 className="text-primary text-center block md:hidden my-5 text-xl md:text-4xl">
          WELCOME TO <br /> ARK POWER LIMITED
        </h1>
      <div className="md:grid grid-cols-2 md:mt-16 gap-20">
      <div className="relative w-full md:h-[400px] h-[330px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="space-y-5 p-5">
        <h1 className="text-primary hidden md:block text-xl md:text-4xl">
          WELCOME TO <br /> ARK POWER LIMITED
        </h1>
        <h2 className="text-primary">WE SUPPORT ALL YOUR NEEDS!</h2>
        <p className="leading-6">
          Ark Power is a leading integrated Power, Electronic & communication
          technology company that develops, manufactures, markets and sells the
          related equipments. The Company is dedicated to improving power
          protection & generation all the sectors throughout the Bangladesh. Ark
          is focused on improving timely delivery, enhancing the quality and
          customers satisfaction. Located at a prime business location at
          Banani, Dhaka, the Capital of Bangladesh.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Welcome;
