import { useQuery } from 'react-query';

const useUsers = () => {
    const { data: users = [],isLoading, refetch } = useQuery(["Users"], async () => {
        const res = await fetch("http://localhost:3000/users");
        return res.json();
      });
      return { users, isLoading, refetch };
    };

export default useUsers;