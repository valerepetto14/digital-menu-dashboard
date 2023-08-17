import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signIn" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
