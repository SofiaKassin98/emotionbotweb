export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ pregunta: "�C�mo te sientes hoy?" });
  } else {
    res.status(405).json({ error: "M�todo no permitido" });
  }
}
