import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    OneToMany
} from "typeorm";
import { Vehiculo } from "./vehiculo";
import { Usuario } from './Usuarios';
import { Mantenimiento } from './Mantenimiento';
export enum TaskStatus {
    TODO = "todo",
    IN_PROGRESS = "en proseso",
    COMPLETED = "completado",
}

@Entity()
export class Ordenes_trabajo extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id_orden: string;
    
    @ManyToOne(() => Usuario, usuario => usuario.id)
    id_usuario: Usuario;

    @ManyToOne(() => Vehiculo, vehiculo => vehiculo.id_vehiculo)
    id_vehiculo: Vehiculo;

    
    @Column()
    fecha_ingreso: Date;

    @Column({ type: 'date', nullable: true })
    fecha_salida: Date;

    @Column({
        type: "enum",
        enum: TaskStatus,
        default: TaskStatus.TODO,
      })
      status: TaskStatus;

      @Column("text")
      descripcion_problema: string;
      
  
      @OneToMany(() => Mantenimiento, (mantenimiento: Mantenimiento) => mantenimiento.id_orden) 
      mantenimientos: Mantenimiento[]; // Usar el tipo Mantenimiento correctamente
  }
    