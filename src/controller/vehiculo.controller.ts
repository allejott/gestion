import { Request, Response } from "express";
import { Vehiculo } from "../entities/vehiculo";


// Obtener todos los vehículos
export const getAllVehiculos = async (req: Request, res: Response): Promise<void> => {
  try {
    const vehiculos = await Vehiculo.find({ relations: ["id_usuario"] }); // Cargar usuarios relacionados
    res.json(vehiculos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los vehículos" });
  }
};


// Obtener un vehículo por ID
export const getVehiculo = async (req: Request, res: Response): Promise<void> => { // Cambiar a Promise<void>
    const { id } = req.params; // Obtener el ID del vehículo desde los parámetros de la solicitud
  
    try {
      // Buscar el vehículo en la base de datos con la relación al usuario
      const vehiculo = await Vehiculo.findOne({ where: { id_vehiculo: id }, relations: ["id_usuario"] });
      
      // Verificar si el vehículo fue encontrado
      if (!vehiculo) {
        res.status(404).json({ message: "Vehículo no encontrado" });
        return; // Salir de la función si no se encuentra el vehículo
      }
      
      // Si se encuentra, devolver el vehículo en formato JSON
      res.json(vehiculo);
    } catch (error) {
      // Manejar errores de servidor
      console.error(error);
      res.status(500).json({ message: "Error al obtener el vehículo" });
    }
  };
  

// Crear un nuevo vehículo

export const createVehiculo = async (req: Request, res: Response): Promise<void> => { // Cambiar a Promise<void>
    const { id_usuario, marca, modelo, año, placa } = req.body;
  
    try {
      const nuevoVehiculo = Vehiculo.create({ id_usuario, marca, modelo, año, placa });
      await nuevoVehiculo.save();
      
      res.status(201).json(nuevoVehiculo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear el vehículo" });
    }
  };

// Actualizar un vehículo por ID
export const updateVehiculo = async (req: Request, res: Response): Promise<void> => { // Cambiar a Promise<void>
    const { id } = req.params;
  
    try {
      const vehiculo = await Vehiculo.findOne({ where: { id_vehiculo: id } });
  
      if (!vehiculo) {
        res.status(404).json({ message: "Vehículo no encontrado" });
        return; // Salir de la función
      }
  
      await Vehiculo.update(id, req.body);
      const vehiculoActualizado = await Vehiculo.findOne({ where: { id_vehiculo: id } });
      
      res.json(vehiculoActualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar el vehículo" });
    }
  };
  
// Eliminar un vehículo por ID
export const deleteVehiculo = async (req: Request, res: Response): Promise<void> => { // Cambiar a Promise<void>
    const { id } = req.params;
  
    try {
      const vehiculo = await Vehiculo.findOne({ where: { id_vehiculo: id } });
  
      if (!vehiculo) {
        res.status(404).json({ message: "Vehículo no encontrado" });
        return; // Salir de la función
      }
  
      await Vehiculo.delete(id);
      
      res.json({ message: "Vehículo eliminado correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar el vehículo" });
    }
  };
  
