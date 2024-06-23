import React from "react";

const ProductsAndServices = () => {
  const productsIcon = [
    {
      image: 'https://www.nicepng.com/png/full/105-1055410_surveillance-camera-svg-png-icon-free-download-cctv.png',
      title: 'Security System',
      sub_title: ''
    },
    {
      image: 'https://cdn-icons-png.freepik.com/512/2114/2114385.png',
      title: 'Solar System',
      sub_title: ''
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/4824/4824945.png',
      title: 'Transformer',
      sub_title: ''
    },
    {
      image: 'https://img.freepik.com/premium-vector/generator-icon-logo-vector-design-template_827767-4583.jpg',
      title: 'Generator',
      sub_title: ''
    },
    {
      image: 'https://static.thenounproject.com/png/2301592-200.png',
      title: 'Data Center',
      sub_title: ''
    },
    {
      image: 'https://icons.veryicon.com/png/o/construction-tools/equipment-2/ups-1.png',
      title: 'UPS',
      sub_title: ''
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/48/48860.png',
      title: 'Communication Equipment',
      sub_title: ''
    },
    {
      image: 'https://cdn5.vectorstock.com/i/1000x1000/35/29/power-voltage-regulator-icon-simple-vector-41053529.jpg',
      title: 'Voltage Regulator',
      sub_title: ''
    },
  ]
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div>
        <h1 className="text-primary text-4xl text-center mb-10">
          Products and Services
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-2 justify-center items-center text-center">
          {
            productsIcon.map((product, index) => <div key={index} className="flex flex-col items-center p-4">
            <div className="w-16 h-16 mb-5 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 transform"
                src={product.image}
                alt={product.title}
              />
            </div>
            <h1 className="text-2xl font-bold text-center">{product.title}</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis.</p>
          </div>
            )          
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
