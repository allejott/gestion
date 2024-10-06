import { Usuario } from "../../entities/Usuarios";

declare global {
  namespace Express {
    interface Request {
      Usuario?: Usuario; // Añadimos la propiedad user
    }
  }
}