import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,
    BaseEntity,
} from "typeorm";
import { Usuario } from './Usuarios';

@Entity()
export class Vehiculo extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id_vehiculo: string;

    @ManyToOne(() => Usuario, usuario => usuario.id)
    id_usuario: Usuario;

    @Column({ length: 50 })
    marca: string;

    @Column({ length: 50 })

    modelo: string;

    @Column({type:"int"})
    año: number;

    @Column({ unique: true, length: 10 })
    placa: string;

}

