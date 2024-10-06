import { Usuario } from "../entities/Usuarios";
import { Vehiculo } from '../entities/vehiculo';
// Verificar si el correo existe
export const existingEmail = async (email: string) => {
  const existeEmail = await Usuario.findOne({ where: { email } });
  if (email && existeEmail) {
    throw new Error(`El correo: ${email}, ya está registrado`);
  }
};

// Verificar si el correo existe
export const existingUser = async (id: string) => {
  const existeUsuario = await Usuario.findOneBy({ id });
  if (!existeUsuario) {
    throw new Error(`El usuario con el id no existe ${id}`);
  }
};

// Verificar que la contraseña cumpla las condiciones
export const validPassword = async (password: string) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{8,}$/;
  if (!regex.test(password)) {
    throw new Error(
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número"
    );
  }
};


// Validador personalizado para comprobar si la placa ya existe
export const existingPlaca = async (placa: string) => {
  const vehiculo = await Vehiculo.findOne({ where: { placa } });
  if (vehiculo) {
    throw new Error("La placa ya está registrada");
  }
};

// Validador personalizado para comprobar si el ID del vehículo existe
export const existingVehiculo = async (id: string) => {
  const vehiculo = await Vehiculo.findOneBy({ id_vehiculo: id });
  if (!vehiculo) {
    throw new Error("El vehículo no existe");
  }
};