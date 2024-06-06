import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true before starting the data fetch
    axios.get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data with Axios", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after data fetch is complete
      });
  }, []);

  return [products, isLoading]; // Return the products and loading state
};

export default useProducts;
