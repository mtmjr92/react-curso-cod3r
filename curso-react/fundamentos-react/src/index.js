import React from "react";
import ReacDOM from "react-dom";
import "./index.css"; // relative import
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReacDOM.render(
  <div>
    <Primeiro></Primeiro>
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
  </div>,
  document.getElementById("root")
);
