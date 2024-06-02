import React from 'react';

const Products = ({ product }) => {
    // console.log(product);
  return (
    <div className="bg-white p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={product?.imageUrl} alt={product?.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h2 className="text-lg font-bold mb-2">{product?.name}</h2>
      <p className="text-gray-700 mb-2">{product?.description}</p>
      <p className="text-blue-500 font-bold">{product?.price}</p>
    </div>
  );
};

export default Products;