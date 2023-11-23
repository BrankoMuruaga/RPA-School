// VentasMensuales.jsx
import React, { useState } from "react";
import Filtro from "../Components/Filtro";
import TableVentas from "../Components/TableVentas";
import Card from "../Components/TextArea";

const VentasMensuales = () => {
  const [filtro, setFiltro] = useState({ fechaDesde: "", fechaHasta: "" });

  const handleFilter = (filtro) => {
    setFiltro(filtro);
  };

  return (
    <div className="container mx-auto flex flex-col px-2 py-4">
      <Card>Registro de ventas</Card>
      <Card>
        <Filtro onFilter={handleFilter} />
      </Card>
      <TableVentas filtro={filtro}></TableVentas>
    </div>
  );
};

export default VentasMensuales;
