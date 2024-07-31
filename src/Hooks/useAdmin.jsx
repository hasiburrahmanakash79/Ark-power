import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await axios.get(
        `https://ark-power-server.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.admin;
    },
  });

  return { isAdmin, isAdminLoading };
};

export default useAdmin;
