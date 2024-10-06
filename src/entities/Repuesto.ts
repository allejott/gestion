import { Entity, 
    PrimaryGeneratedColumn, 
    Column } from 'typeorm';

@Entity()
export class Repuesto {
    @PrimaryGeneratedColumn()
    id_repuesto: number;

    @Column({ length: 100 })
    nombre_repuesto: string;

    @Column("text")
    descripcion: string;

    @Column("decimal", { precision: 10, scale: 2 })
    costo: number;
}
