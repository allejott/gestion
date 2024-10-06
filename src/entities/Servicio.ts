import {
    Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
 
} from "typeorm";


@Entity()
export class Servicio extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id_servicio: string;

    @Column({ length: 100 })
    nombre_servicio: string;

    @Column("text")
    descripcion: string;

    @Column("decimal", { precision: 10, scale: 2 })
    precio: number;
    
}