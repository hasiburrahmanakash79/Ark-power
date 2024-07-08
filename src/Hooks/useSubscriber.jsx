import { useQuery } from 'react-query';

const useSubscriber = () => {
    const { data: subscribers = [],isLoading, refetch } = useQuery(["Subscribers"], async () => {
      const res = await fetch("http://localhost:3000/subscriber");
      return res.json();
    });
    return { subscribers, isLoading, refetch };
  };

export default useSubscriber;