import React, { useState } from "react";
import {
  Input,
  Listbox,
  ListboxItem,
  ListboxSection,
  Button,
} from "@nextui-org/react";

function FormularioIngresoEmpleado() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [documentoIdentidad, setDocumentoIdentidad] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [puesto, setPuesto] = useState("");
  const [salario, setSalario] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");

  return (
    <div className="flex flex-col m-auto w-7/12">
      <h1>Formulario de ingreso de empleado</h1>
      <Listbox>
        <ListboxSection showDivider>
          <ListboxItem>
            <Input
              isRequired
              label="Nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </ListboxItem>
          <ListboxItem>
            <Input
              label="Apellido"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </ListboxItem>
          <ListboxItem>
            <Input
              label="Domicilio"
              type="text"
              placeholder="Domicilio"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
            />
          </ListboxItem>
          <ListboxItem>
            <Input
              readOnly
              label="Fecha de nacimiento"
              type="date"
              placeholder="Fecha de nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </ListboxItem>
          <ListboxItem>
            <Input
              label="DNI"
              type="number"
              value={documentoIdentidad}
              onChange={(e) => setDocumentoIdentidad(e.target.value)}
            />
          </ListboxItem>
          <ListboxItem className="datos-de-contacto">
            <Input
              label="Telefono"
              type="number"
              value={numeroTelefono}
              onChange={(e) => setNumeroTelefono(e.target.value)}
            />
          </ListboxItem>
          <ListboxItem>
            <Input
              type="email"
              label="Dirección de correo electrónico"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
            />
          </ListboxItem>
        </ListboxSection>
        <ListboxSection>
          <ListboxItem className="datos-laborales">
            <Input
              label="Puesto"
              type="text"
              placeholder="Puesto"
              value={puesto}
              onChange={(e) => setPuesto(e.target.value)}
            />
            <Input
              label="Salario"
              type="number"
              placeholder="Salario"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
            <Input
              label="Fecha de Inicio"
              type="date"
              placeholder="Fecha de inicio"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </ListboxItem>
        </ListboxSection>
      </Listbox>
      <Button type="submit" className="btn btn-primary">
        Registrar empleado
      </Button>
    </div>
  );
}

export default FormularioIngresoEmpleado;
