import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className=" container mx-auto p-6">
      <div className="md:mt-24 mt-14">
        <h1 className="text-primary text-center md:text-5xl text-3xl uppercase">
          Our Services
        </h1>
        <p className="text-primary text-center md:mt-2 text-xl md:uppercase mb-10">
          We truly care about our customer
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="md:border-r-2 p-5">
            <h1 className="font-bold mb-3 text-xl">Our Services</h1>
            <p className="text-balance">
              Our suite of major products includes a diverse range of essential
              equipment designed to support various critical functions in
              industrial, commercial, and residential settings. Our
              Uninterruptible Power Supplies (UPS), available in modular and
              tower configurations, offer reliable backup power solutions,
              ensuring continuity and safety for sensitive electronic devices
              and systems. The Automatic Voltage Regulator (AVR) plays a crucial
              role in maintaining voltage stability, protecting equipment from
              power surges and fluctuations that can lead to damage.
            </p>
          </div>
          <div className="md:border-r-2 p-5">
          <h1 className="font-bold mb-3 text-xl">After sale Services</h1>
            <ul className="list-disc">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, hic. Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, hic. Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, hic. Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, hic. Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, hic. Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="p-5">
          <h1 className="font-bold mb-3 text-xl">Feature Product</h1>
            <div className="">
            <Card
              className="overflow-hidden p-3 border hover:shadow-xl"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/033/609/small_2x/wonderful-mushroom-wallpaper-fantasy-wallpaper-4k-mushroom-light-fantasy-mushroom-jungle-generative-ai-photo.jpeg"
                    alt="product name"
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="text-center">
                  <Link
                    to="/"
                    className="md:text-lg text-black font-semibold text-sm"
                  >
                    Product name
                  </Link>
                </div>
              </CardBody>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

{
  /*       We also offer robust Data Centre Solutions that include server racks,
          cooling systems, power management, and network infrastructure, all
          designed to ensure efficient and reliable operation of data centers,
          which are the backbone of modern digital services. Battery Chargers
          ensure that batteries are effectively charged and maintained, powering
          a wide array of devices from automotive to industrial applications.
          <br />
          Our Instant Power Supply (IPS) Inverters, available in modular and
          tower formats, provide essential backup power during outages,
          converting DC from batteries into AC power to keep critical systems
          operational. Transformers are key in adjusting voltage levels in power
          distribution, facilitating the safe and efficient delivery of
          electricity across different parts of a network.
          <br />
          Switchgear, both HT (High Tension) and LT (Low Tension), is crucial
          for controlling, protecting, and isolating electrical systems in
          various voltage categories, ensuring the safety and reliability of
          power distribution. Our Solar Systems harness solar energy to generate
          electricity, providing an eco-friendly alternative to traditional
          power sources and reducing reliance on non-renewable energy.
          <br />
          The PFI (Power Factor Improvement) Plants enhance the efficiency of
          electrical systems by improving the power factor, thus reducing energy
          losses. Generators are indispensable for providing backup power during
          outages or in remote locations, ensuring a continuous power supply
          where grid electricity is unavailable.
          <br />
          <br />
          Finally, our range of Communication Equipment supports modern
          telecommunications, including networking devices, radios, and other
          infrastructure, crucial for connectivity and information exchange in
          today’s digital world. Each of these products is designed to meet the
          high standards of quality and reliability required in their respective
          applications, contributing to the efficiency, safety, and 
          sustainability of electrical and electronic systems worldwide. */
}
