import React from "react";
import ReacDOM from "react-dom";
import "./index.css"; // relative import
import Primeiro from "./components/basicos/Primeiro";

ReacDOM.render(
  <div>
    <Primeiro></Primeiro>
  </div>,
  document.getElementById("root")
);
