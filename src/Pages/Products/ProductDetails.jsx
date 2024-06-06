import React from 'react';
import useProducts from '../../Hooks/useProducts';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Hooks/Loading/LoadingSpinner';

const ProductDetails = () => {
    const [products, isLoading] = useProducts()
    const {id} = useParams()
    const productDetail = products.find((product) => product._id === id)
    console.log(productDetail);
    if (isLoading && products) {
        return <LoadingSpinner />;
      }
    return (
        <div>
            <img src={productDetail?.imageUrl} alt="" />
            
        </div>
    );
};

export default ProductDetails;