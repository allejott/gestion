import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Usuario } from "./entities/Usuarios";
import { Vehiculo } from "./entities/vehiculo";
import { Ordenes_trabajo } from "./entities/OrdenesTrabajo";
import { Mantenimiento } from "./entities/Mantenimiento";
import { Servicio } from "./entities/Servicio";
import { Repuesto } from "./entities/Repuesto";
import { Detalle_M } from "./entities/DetalleMantenimiento";
import { Mecanico } from "./entities/Mecanico";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Usuario, Vehiculo, Ordenes_trabajo, Mantenimiento, Servicio, Repuesto,Mecanico, Detalle_M],
  logging: true,
  synchronize: true,
});
