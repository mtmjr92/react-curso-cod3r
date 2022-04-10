import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamento React</h1>

      <div className="Cards">
        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira" />
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#588C73">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3}
          ></ComParametro>
        </Card>

        <Card titulo="#01 - Fragmento" color="#FA6900">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
