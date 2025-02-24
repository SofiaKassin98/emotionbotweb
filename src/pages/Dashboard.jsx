import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Link to="/graphs"><button>Ver Gráficas</button></Link>
      <Link to="/questions"><button>Enviar Preguntas</button></Link>
    </div>
  );
}
