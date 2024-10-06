import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
    ManyToOne,
} from "typeorm";
import { Ordenes_trabajo } from "./OrdenesTrabajo";

@Entity()
export class Mantenimiento extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id_mantenimiento: string;

    

    @Column("text")
    descripcion: string;

    @Column()
    fecha_mantenimiento: Date;

    @Column({
        type: "enum",
        enum: ['preventivo', 'correctivo'],
    })
    tipo: 'preventivo' | 'correctivo';

    @Column("decimal", { precision: 10, scale: 2 })
    costo: number;
    
   
    @ManyToOne(() => Ordenes_trabajo, orden => orden.mantenimientos) // Relación inversa
    id_orden: Ordenes_trabajo;
}