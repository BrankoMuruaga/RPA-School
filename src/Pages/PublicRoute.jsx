import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE, INICIO } from "../Data/paths";
import { useAuth } from "../Components/authContext";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={INICIO} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;
