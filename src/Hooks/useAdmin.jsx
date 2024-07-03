import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from 'react-query';

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const token = localStorage.getItem('access-token'); // Ensure the token is correctly retrieved
      console.log('Token:', token); // Debugging line
      console.log('User email:', user?.email); // Debugging line

      const res = await axios.get(`http://localhost:3000/users/admin/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('is admin response', res); // Debugging line
      return res.data.admin;
    }
  });

  return {isAdmin, isAdminLoading};
};

export default useAdmin;


// import { useContext } from 'react';
// import { useQuery } from 'react-query';
// import { AuthContext } from '../Provider/AuthProvider';
// import axios from 'axios';

// const useAdmin = () => {
//     const {user} = useContext(AuthContext)
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axios.get(`http://localhost:3000/admin/${user?.email}`);
//             return res.data.admin;
            
//         }
//     })
//     return [isAdmin, isAdminLoading]
// };

// export default useAdmin;