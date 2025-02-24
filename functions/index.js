const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// Obtener la última pregunta
exports.getPregunta = functions.https.onRequest(async (req, res) => {
    try {
        const preguntaRef = db.collection("preguntas").doc("pregunta_actual");
        const doc = await preguntaRef.get();
        if (!doc.exists) {
            return res.status(404).json({ error: "No hay preguntas disponibles" });
        }
        res.json({ pregunta: doc.data().texto });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Guardar respuesta
exports.guardarRespuesta = functions.https.onRequest(async (req, res) => {
    try {
        const { respuesta } = req.body;
        if (!respuesta) {
            return res.status(400).json({ error: "Falta la respuesta" });
        }
        await db.collection("respuestas").add({
            respuesta,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        });
        res.json({ status: "Respuesta guardada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
