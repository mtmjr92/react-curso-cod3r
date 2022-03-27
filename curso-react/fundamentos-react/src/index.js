import React from "react";
import ReacDOM from "react-dom";
import "./index.css"; // relative import

const tag = <strong>Olá React!</strong>;

ReacDOM.render(<div>{tag}</div>, document.getElementById("root"));
