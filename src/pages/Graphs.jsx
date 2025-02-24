import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Graphs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, "emociones");
    onValue(dataRef, (snapshot) => {
      const values = snapshot.val() || {};
      const timestamps = Object.keys(values);
      const emociones = Object.values(values);

      setData({
        labels: timestamps,
        datasets: [
          {
            label: "Porcentaje de emoción",
            data: emociones,
            borderColor: "blue",
            fill: false
          }
        ]
      });
    });
  }, []);

  return (
    <div>
      <h1>Gráfica de Emociones</h1>
      {data.labels ? <Line data={data} /> : <p>Cargando datos...</p>}
    </div>
  );
}
