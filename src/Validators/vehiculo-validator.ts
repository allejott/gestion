import { check } from "express-validator";

export const validateVehiculo = [
  check("placa")
    .isLength({ min: 6, max: 6 }).withMessage("La placa debe tener 6 caracteres")
    .matches(/^[A-Z]{3}\d{3}$/).withMessage("Formato de placa inválido"),
  check("marca").notEmpty().withMessage("La marca es obligatoria"),
  check("modelo").notEmpty().withMessage("El modelo es obligatorio"),
  check("año")
    .isInt({ min: 1886 }).withMessage("El año debe ser un número mayor a 1886"),
];
