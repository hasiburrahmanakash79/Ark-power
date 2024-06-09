import { useEffect, useState } from "react";
import axios from "axios";

const useNewsAndEvents = () => {
  const [newsAndEvents, setNewsAndEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true before starting the data fetch
    axios.get("http://localhost:3000/news")
      .then((response) => {
        setNewsAndEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data with Axios", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after data fetch is complete
      });
  }, []);

  return [newsAndEvents, isLoading]; // Return the newsAndEvents and loading state
};

export default useNewsAndEvents;