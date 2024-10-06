import { Request, Response } from "express";
import { Usuario } from "../entities/Usuarios";
import bcrypt from "bcryptjs";

// Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await Usuario.find();
    res.json(users);  // Enviar los usuarios como respuesta
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

// Obtener un usuario por ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await Usuario.findOneBy({ id });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.json(user);  // Aquí simplemente envías la respuesta, no la devuelves
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario", error });
  }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, telefono, direccion, rol, fecha_registro} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const newUser = Usuario.create({ name, email, password: hashedPassword, telefono, direccion, rol, fecha_registro  });
    await newUser.save();
    res.json(newUser);  // Aquí no debes devolver res.json(), solo lo llamas
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};
// Actualizar un usuario por ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { email, password, role, ...rest } = req.body;

  if (password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    rest.password = hashedPassword;
  }

  try {
    const user = await Usuario.findOneBy({ id });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      await Usuario.update(id, rest);  // Actualiza los datos del usuario
      const updatedUser = await Usuario.findOneBy({ id });  // Busca el usuario actualizado
      res.json(updatedUser);  // Envía el usuario actualizado como respuesta
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};
// Eliminar a un usuario por ID
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await Usuario.findOneBy({ id });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      await Usuario.delete(id);  // Elimina el usuario
      res.json({ message: "Usuario eliminado con éxito" });  // Envía confirmación de eliminación
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};