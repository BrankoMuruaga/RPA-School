import React, { useState } from "react";
import Aside from "./Components/Aside";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VentasMensuales from "./Pages/VentasMensuales";

export default function App() {
  const [filtro, setFiltro] = useState({ fechaDesde: "", fechaHasta: "" });

  return (
    <BrowserRouter className="flex">
      <div className="flex">
        <Aside />
        <Routes>
          <Route path="/Inicio" element={<div>Home</div>} />
          <Route path="/Registro" element={<VentasMensuales />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
