import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue, set } from "firebase/database";

function App() {
  const [pregunta, setPregunta] = useState("Cargando pregunta...");
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    fetch("/api/pregunta")
      .then((res) => res.json())
      .then((data) => setPregunta(data.pregunta))
      .catch((error) => console.error("Error obteniendo pregunta:", error));
  }, []);

  const enviarRespuesta = (respuesta) => {
    fetch("/api/respuesta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.mensaje))
      .catch((error) => console.error("Error enviando respuesta:", error));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>EmotionBotWeb</h1>
      <h2>{pregunta}</h2>
      <button onClick={() => enviarRespuesta("Si")}>Sí</button>
      <button onClick={() => enviarRespuesta("No")}>No</button>
    </div>
  );
}

export default App;
