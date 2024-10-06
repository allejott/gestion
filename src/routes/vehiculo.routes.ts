import { Router } from "express";
import {
  createVehiculo,
  deleteVehiculo,
  getAllVehiculos,
  getVehiculo,
  updateVehiculo,
} from "../controller/vehiculo.controller"; // Ajusta la ruta según la ubicación de tu controlador

const router = Router();

router.get("/", getAllVehiculos); // Obtener todos los vehículos
router.get("/:id", getVehiculo); // Obtener un vehículo por ID
router.post("/", createVehiculo); // Crear un nuevo vehículo
router.patch("/:id", updateVehiculo); // Actualizar un vehículo por ID
router.delete("/:id", deleteVehiculo); // Eliminar un vehículo por ID

export default router;
