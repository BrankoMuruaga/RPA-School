import React, { useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import VentasMensuales from "./VentasMensuales";
import Login from "./login";
import Aside from "../Components/Aside";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { LOGIN, PRIVATE, INICIO, REGISTRO } from "../Data/paths";

export const RoutesApp = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: LOGIN,
        element: <Login />,
      },
    ],
  },
  {
    path: PRIVATE,
    element: <PrivateRoute />,
    children: [
      {
        path: INICIO, // Ruta relativa a /private/Aside
        element: <h1>Home</h1>,
      },
      {
        path: REGISTRO, // Ruta relativa a /private/Aside
        element: <VentasMensuales />,
      },
    ],
  },
]);
