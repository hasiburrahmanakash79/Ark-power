

import { useQuery } from "react-query";

const useProducts = () => {
  const { data: products = [],isLoading, refetch } = useQuery(["Products"], async () => {
    const res = await fetch("https://ark-power-server.vercel.app/products");
    return res.json();
  });
  return { products, isLoading, refetch };
};

export default useProducts;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Initialize loading state

//   useEffect(() => {
//     setIsLoading(true); // Set loading to true before starting the data fetch
//     axios.get("https://ark-power-server.vercel.app/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data with Axios", error);
//       })
//       .finally(() => {
//         setIsLoading(false); // Set loading to false after data fetch is complete
//       });
//   }, []);

//   return [products, isLoading]; // Return the products and loading state
// };

// export default useProducts;

