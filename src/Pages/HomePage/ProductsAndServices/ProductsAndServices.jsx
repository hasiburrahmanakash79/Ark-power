import React from "react";

const ProductsAndServices = () => {
  return (
    <div>
      <h1 className="text-4xl text-center uppercase font-bold mb-16 text-primary">
        Products and Services
      </h1>
      <div className="grid grid-cols-4 gap-10 justify-center items-center text-center">
        <div className=" ">
            <img className="w-40 mx-auto mb-5 " src="https://www.nicepng.com/png/full/105-1055410_surveillance-camera-svg-png-icon-free-download-cctv.png" alt="" />
            <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis.</p>
        </div>
        <div>
            <img className="w-40 mx-auto mb-5 "  src="https://cdn-icons-png.freepik.com/512/2114/2114385.png" alt="" />
            <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis.</p>
        </div>
        <div>
            <img  className="w-40 mx-auto mb-5 " src="https://cdn-icons-png.flaticon.com/512/4824/4824945.png" alt="" />
            <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis.</p>
        </div>
        <div>
            <img  className="w-40 mx-auto mb-5 " src="https://www.nicepng.com/png/full/105-1055410_surveillance-camera-svg-png-icon-free-download-cctv.png" alt="" />
            <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
