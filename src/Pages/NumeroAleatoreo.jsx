import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function NumeroAleatoreo() {
  const [numero, generarNumero] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center m-auto">
      <h1 className="mb-5 text-5xl font-mono">{numero}</h1>
      <Button onClick={() => generarNumero(Math.round(Math.random() * 10))}>
        Generar Numero
      </Button>
    </div>
  );
}

export default NumeroAleatoreo;
