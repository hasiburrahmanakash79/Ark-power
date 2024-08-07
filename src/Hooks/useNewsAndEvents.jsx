import { useQuery } from "react-query";

const useNewsAndEvents = () => {
  const { data: newsAndEvents = [],isLoading, refetch } = useQuery(["newsAndEvents"], async () => {
    const res = await fetch("https://ark-power-server.vercel.app/news");
    return res.json();
  });
  return { newsAndEvents, isLoading, refetch };
};

export default useNewsAndEvents;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useNewsAndEvents = () => {
//   const [newsAndEvents, setNewsAndEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     axios.get("https://ark-power-server.vercel.app/news")
//       .then((response) => {
//         setNewsAndEvents(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data with Axios", error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   return [newsAndEvents, isLoading]; 
// };

// export default useNewsAndEvents;