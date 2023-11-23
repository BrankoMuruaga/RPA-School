import React, { useMemo, useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { data } from "./JSON-ventasMensuales";

const columns = [
  "FECHA",
  "PRODUCTO",
  "CANTIDAD",
  "PRECIO",
  "CATEGORIA",
  "TRANSACCION",
];

const TableVentas = ({ filtro: filtroProps }) => {
  const [page, setPage] = useState(1);
  const [filtro, setFiltro] = useState({
    fechaDesde: "",
    fechaHasta: "",
  });

  useEffect(() => {
    setFiltro(filtroProps);
  }, [filtroProps]);

  const rowsPerPage = 4;

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const fecha = new Date(item.fecha);
      const fechaDesde = filtro.fechaDesde ? new Date(filtro.fechaDesde) : null;
      const fechaHasta = filtro.fechaHasta ? new Date(filtro.fechaHasta) : null;
      return (
        (!fechaDesde || fecha >= fechaDesde) &&
        (!fechaHasta || fecha <= fechaHasta)
      );
    });
  }, [filtro]);

  const pages = Math.ceil(filteredData.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredData.slice(start, end);
  }, [page, filteredData]);

  return (
    <Table
      aria-label="Tabla de ejemplo con paginación del lado del cliente"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column}>{column}</TableColumn>
        ))}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {columns.map((column) => (
              <TableCell key={column}>
                {getKeyValue(item, column.toLowerCase())}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableVentas;
