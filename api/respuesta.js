export default function handler(req, res) {
  if (req.method === "POST") {
    const { respuesta } = req.body;
    console.log("Respuesta recibida:", respuesta);
    res.status(200).json({ mensaje: "Respuesta guardada" });
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
