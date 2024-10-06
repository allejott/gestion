import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/usuario.controller";
import { validateErrors, validateBody } from "../middlewares/validate-errors";

import {
  validateUser,
  validateUserExists,
  validateUserUpdate,
} from "../Validators/user-validators";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", validateUserExists, validateErrors, getUser);
router.post("/", validateUser, validateErrors, createUser);
router.patch(
  "/:id",
  validateUserUpdate,
  validateBody,
  validateErrors,
  updateUser
);
router.delete("/:id", validateUserExists, validateErrors, deleteUser);

export default router;