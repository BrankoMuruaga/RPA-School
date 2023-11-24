import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { RoutesApp } from "./Pages/Routes";

export default function App() {
  const [filtro, setFiltro] = useState({ fechaDesde: "", fechaHasta: "" });

  return (
    <div className="flex">
      {/* <Aside /> */}
      <RouterProvider router={RoutesApp} />
    </div>
  );
}
