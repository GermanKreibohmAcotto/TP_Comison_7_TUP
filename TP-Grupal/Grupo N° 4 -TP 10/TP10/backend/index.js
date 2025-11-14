import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  console.log("🌐 Se accedió a la ruta raíz /");
  res.send("Backend funcionando DE PERLAS");
});

// Ruta de prueba
app.get("/api/ping", (req, res) => {
  console.log("Se recibió un ping desde el frontend o navegador");
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  console.log(`🔧 Probar ping: http://localhost:${PORT}/api/ping`);
});
