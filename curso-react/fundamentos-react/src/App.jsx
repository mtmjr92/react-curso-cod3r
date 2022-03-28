import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import "./App.css";

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamento React</h1>

      <div className="Cards">
        <Card titulo="#04 - Desafio Aleatório">
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3}
          ></ComParametro>
        </Card>

        <Card titulo="#01 - Fragmento">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
