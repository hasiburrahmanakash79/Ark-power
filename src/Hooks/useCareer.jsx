import { useQuery } from "react-query";

const useCareer = () => {
  const { data: careerContent = [],isLoading, refetch } = useQuery(["CareerContent"], async () => {
    const res = await fetch("http://localhost:3000/career");
    return res.json();
  });
  return { careerContent, isLoading, refetch };
};

export default useCareer;