import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany } from 'typeorm';
import { Usuario } from './Usuarios';
import { Detalle_M } from './DetalleMantenimiento';

export class Mecanico  extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id_mecanico: number;

    @ManyToOne(() => Usuario, usuario => usuario.id)
    id_usuario: Usuario;

    @Column({ length: 100 })
    especialidad: string;

    @Column()
    fecha_contratacion: Date;

    @OneToMany(() => Detalle_M, detalle => detalle.id_detalle)
    detalleMecanicos: Detalle_M[];
}
