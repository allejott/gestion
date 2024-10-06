import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

// Middleware para manejar errores de validación
export const validateErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();  // Continuar con el siguiente middleware si no hay errores
  }
};

  // Verificamos si el body está vacío
 // Middleware para verificar si el cuerpo de la solicitud está vacío
export const validateBody = (req: Request, res: Response, next: NextFunction): void => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      message: "Debe proporcionar al menos un campo para actualizar",
    });
  } else {
    next();  // Continuar con el siguiente middleware si el cuerpo no está vacío
  }
};
