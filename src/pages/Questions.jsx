import React, { useState } from "react";
import { database, ref, set } from "../firebaseConfig";

export default function Questions() {
  const [question, setQuestion] = useState("");

  const sendQuestion = () => {
    set(ref(database, "preguntas"), {
      nuevaPregunta: question
    });
    alert("Pregunta enviada al Arduino");
  };

  return (
    <div>
      <h1>Enviar Pregunta</h1>
      <input
        type="text"
        placeholder="Escribe una pregunta..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={sendQuestion}>Enviar</button>
    </div>
  );
}
