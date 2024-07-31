import { useQuery } from 'react-query';

const useUsers = () => {
    const { data: users = [],isLoading, refetch } = useQuery(["Users"], async () => {
        const res = await fetch("https://ark-power-server.vercel.app/users");
        return res.json();
      });
      return { users, isLoading, refetch };
    };

export default useUsers;