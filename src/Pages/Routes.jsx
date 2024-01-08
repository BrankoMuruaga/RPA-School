import React from "react";
import { createBrowserRouter } from "react-router-dom";
import VentasMensuales from "./VentasMensuales";
import Login from "./login";
import PrivateRoute from "./PrivateRoute";
import {
  LOGIN,
  PRIVATE,
  INICIO,
  REGISTRO,
  EMPLEADOS,
  NUMERO_ALEATOREO,
} from "../Data/paths";
import Empleados from "./Empleados";
import NumeroAleatoreo from "./NumeroAleatoreo";

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
        path: NUMERO_ALEATOREO,
        element: <NumeroAleatoreo />,
      },
      {
        path: REGISTRO,
        element: <VentasMensuales />,
      },
      {
        path: EMPLEADOS,
        element: <Empleados />,
      },
    ],
  },
]);
