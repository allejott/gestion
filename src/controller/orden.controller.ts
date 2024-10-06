import { Request, Response } from 'express';
import { Ordenes_trabajo } from '../entities/OrdenesTrabajo';

export const getOrdenTrabajo = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; // Obtener el ID de la orden de trabajo desde los parámetros de la ruta

    try {
        // Buscar la orden de trabajo con sus relaciones
        const orden = await Ordenes_trabajo.findOne({
            where: { id_orden: id },
            relations: ['id_usuario', 'id_vehiculo', 'id_vehiculo.id_usuario', 'mantenimientos'] // Incluir las relaciones necesarias
        });

        if (!orden) {
            res.status(404).json({ message: "Orden de trabajo no encontrada" });
            return;
        }

        // Responder con la orden de trabajo y su información relacionada
        res.json(orden);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la orden de trabajo" });
    }
};
