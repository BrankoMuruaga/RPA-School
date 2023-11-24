// App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { RoutesApp } from "./Pages/Routes";

export default function App() {
  return <RouterProvider router={RoutesApp} />;
}
