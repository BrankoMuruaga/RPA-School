import React from "react";
import { createBrowserRouter } from "react-router-dom";
import VentasMensuales from "./VentasMensuales";
import Login from "./login";
import Aside from "../Components/Aside";

export const RoutesApp = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/VentasMensuales",
    element: <VentasMensuales />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Inicio",
    element: <Aside />,
  },
]);
