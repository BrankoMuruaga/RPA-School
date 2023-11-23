import React, { useState } from "react";
import { Button } from "@nextui-org/react";

export default function Filtro({ onFilter }) {
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");

  const handleFilterClick = () => {
    onFilter({ fechaDesde, fechaHasta });
  };

  return (
    <>
      <Button color="default" onClick={handleFilterClick}>
        Filtrar
      </Button>
      <div className="flex items-center">
        <label className="text-white mr-2 text-lg">Desde:</label>
        <input
          type="date"
          className="max-w-xs rounded-xl text-black text-sm p-2"
          value={fechaDesde}
          onChange={(e) => setFechaDesde(e.target.value)}
          placeholder="dd/mm/yyyy"
        />
      </div>
      <div className="flex items-center">
        <label className="text-white mr-2 text-lg">Hasta:</label>
        <input
          type="date"
          className="max-w-xs rounded-xl text-black text-sm p-2"
          value={fechaHasta}
          onChange={(e) => setFechaHasta(e.target.value)}
          placeholder="dd/mm/yyyy"
        />
      </div>
    </>
  );
}
