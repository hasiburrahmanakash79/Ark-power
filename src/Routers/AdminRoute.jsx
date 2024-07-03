import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Hooks/Loading/LoadingSpinner";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const {isAdmin, isAdminLoading} = useAdmin();
    const location = useLocation();
  
    if (loading || isAdminLoading) {
      return (
        <LoadingSpinner/>
      );
    }
    if (user && isAdmin) {
      return children;
    } else {
      return <Navigate to="/" state={{ from: location }}></Navigate>;
    }
  };
  
  export default AdminRoute;