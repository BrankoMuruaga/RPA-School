import React from "react";
import { createBrowserRouter } from "react-router-dom";
import VentasMensuales from "./VentasMensuales";
import Login from "./login";
import PrivateRoute from "./PrivateRoute";
import { LOGIN, PRIVATE, INICIO, REGISTRO } from "../Data/paths";

export const RoutesApp = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: PRIVATE,
    element: <PrivateRoute />,
    children: [
      {
        path: INICIO,
        element: <h1>Home</h1>,
      },
      {
        path: REGISTRO,
        element: <VentasMensuales />,
      },
    ],
  },
]);
