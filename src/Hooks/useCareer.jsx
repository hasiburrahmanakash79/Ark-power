import { useQuery } from "react-query";

const useCareer = () => {
  const { data: careerContent = [],isLoading, refetch } = useQuery(["CareerContent"], async () => {
    const res = await fetch("https://ark-power-server.vercel.app/career");
    return res.json();
  });
  return { careerContent, isLoading, refetch };
};

export default useCareer;