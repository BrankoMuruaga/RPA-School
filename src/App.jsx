import React, { useState } from "react";
import Aside from "./Components/Aside";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VentasMensuales from "./Pages/VentasMensuales";
import Login from "./Pages/login";

export default function App() {
  const [filtro, setFiltro] = useState({ fechaDesde: "", fechaHasta: "" });

  const [user, setUser] = useState([]);

  return (
    <BrowserRouter className="flex">
      <div className="flex">
        {user.length > 0 ? <Aside /> : <Navigate to="/Login" />}
        <Routes>
          <Route path="/Inicio" element={<div>Home</div>} />
          <Route path="/Registro" element={<VentasMensuales />}></Route>
          <Route path="/Login" element={<Login serUser={setUser} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
