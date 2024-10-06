import express, { Application } from "express";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import vehiculoRoutes from "./routes/vehiculo.routes";
import ordenTrabajoRoutes from './routes/ordentrabajo.routes';
import usuarioRoutes from './routes/usuario.routes';
import dotenv from "dotenv";
import path from "path";

dotenv.config(); // Cargar variables de entorno

const app: Application = express();

// Servir archivos estáticos desde la carpeta "src/public"
app.use(express.static(path.join(__dirname, 'public')));  // Se elimina un "src" duplicado

app.use(express.json());
// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(json());

// Rutas de la API
app.use("/api/vehiculos", vehiculoRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/orden_trabajo", ordenTrabajoRoutes);

// Rutas para acceder a los archivos HTML
app.get('/vehiculos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vehiculo.html'));  // Corregido
});

app.get('/ordenes-trabajo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ordentrabajo.html'));  // Corregido
});

app.get('/usuario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'usuario.html'));  // Corregido
});
export default app;
