import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { testConnection } from "./db/db.js";

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

// Iniciar servidor y probar conexión a la base de datos
app.listen(PORT, async () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  console.log(`🔧 Probar ping: http://localhost:${PORT}/api/ping`);
  
  // Probar conexión a la base de datos
  await testConnection();
});
