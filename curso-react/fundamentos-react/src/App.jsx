import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default (props) => {
  return (
    <div>
      <h2>Fundamento React 2</h2>
      <Fragmento />

      <ComParametro
        titulo="Situação do Aluno"
        aluno="Pedro"
        nota={9.3}
      ></ComParametro>
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Maria"
        nota={9.9}
      ></ComParametro>
      <Primeiro />
    </div>
  );
};
