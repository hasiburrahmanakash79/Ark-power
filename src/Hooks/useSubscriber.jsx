import { useQuery } from 'react-query';

const useSubscriber = () => {
    const { data: subscribers = [],isLoading, refetch } = useQuery(["Subscribers"], async () => {
      const res = await fetch("https://ark-power-server.vercel.app/subscriber");
      return res.json();
    });
    return { subscribers, isLoading, refetch };
  };

export default useSubscriber;