import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaHandsHelping, FaStar } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="md:mt-24 mt-14">
        <h1 className="text-primary text-center md:text-5xl text-3xl uppercase">
          Our Services
        </h1>
        <p className="text-primary text-center md:mt-2 text-xl md:uppercase mb-10 font-medium">
          We genuinely care about our customers
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          
          {/* Our Services Section */}
          <div className="md:border-r-2 p-5 hover:bg-gray-50 transition ease-in-out duration-300">
            <h1 className="font-bold mb-3 text-xl flex items-center gap-2">
              <FaTools className="text-primary" /> Our Services
            </h1>
            <p className="text-balance text-gray-600 leading-relaxed">
              We provide a wide range of essential products designed to support critical functions in industrial, commercial, and residential sectors. Our 
              <span className="font-semibold"> Uninterruptible Power Supplies (UPS)</span>, both modular and tower configurations, ensure continuous, reliable power for sensitive devices. Additionally, our 
              <span className="font-semibold"> Automatic Voltage Regulators (AVR)</span> protect your equipment from harmful surges and fluctuations.
            </p>
          </div>

          {/* After Sale Services Section */}
          <div className="md:border-r-2 p-5 hover:bg-gray-50 transition ease-in-out duration-300">
            <h1 className="font-bold mb-3 text-xl flex items-center gap-2">
              <FaHandsHelping className="text-primary" /> After Sale Services
            </h1>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
              <li>Comprehensive product training and support.</li>
              <li>24/7 customer service for emergency assistance.</li>
              <li>On-site maintenance and installation guidance.</li>
              <li>Extended warranties and easy replacements.</li>
              <li>Tailored solutions for unique customer requirements.</li>
            </ul>
          </div>

          {/* Featured Product Section */}
          <div className="p-5 hover:bg-gray-50 transition ease-in-out duration-300">
            <h1 className="font-bold mb-3 text-xl flex items-center gap-2">
              <FaStar className="text-primary" /> Featured Product
            </h1>
            <Card className="overflow-hidden p-3 border hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/033/609/small_2x/wonderful-mushroom-wallpaper-fantasy-wallpaper-4k-mushroom-light-fantasy-mushroom-jungle-generative-ai-photo.jpeg"
                    alt="Product name"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="text-center">
                  <Link
                    to="/"
                    className="md:text-lg text-primary font-semibold text-sm hover:underline transition duration-300"
                  >
                    Product Name
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;