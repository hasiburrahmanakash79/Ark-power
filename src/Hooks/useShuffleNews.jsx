import { useEffect, useState } from "react";
import axios from "axios";

// Shuffle function to randomize the array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const useShuffleNews = () => {
  const [shuffleNews, setShuffleNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true before starting the data fetch
    axios.get("https://ark-power-server.vercel.app/news")
      .then((response) => {
        const shuffledData = shuffleArray(response.data);
        setShuffleNews(shuffledData);
      })
      .catch((error) => {
        console.error("Error fetching data with Axios", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after data fetch is complete
      });
  }, []);

  return [shuffleNews, isLoading]; // Return the ShuffleNews and loading state
};

export default useShuffleNews;