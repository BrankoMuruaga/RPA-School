import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../Data/paths";
import { useAuth } from "../Components/authContext";
import Aside from "../Components/Aside";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div className="flex">
      <Aside></Aside>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
