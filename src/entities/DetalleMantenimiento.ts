import { Entity, 
         PrimaryGeneratedColumn, 
         ManyToOne,
          BaseEntity,
          ManyToMany,
          JoinTable

         } 
          from 'typeorm';
import { Mantenimiento} from './Mantenimiento';
import { Servicio } from './Servicio';

import { Repuesto } from './Repuesto';


@Entity()
export class Detalle_M extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id_detalle: number;

    @ManyToOne(() => Mantenimiento, mantenimiento => mantenimiento.id_mantenimiento)
    id_mantenimiento: Mantenimiento;

    @ManyToOne(() => Servicio, servicio => servicio.id_servicio)
    id_servicio: Servicio;

   // @ManyToOne(() => Mecanico, mecanico => mecanico.detalleMecanicos)
    //id_mecanico: Mecanico;

    @ManyToOne(() => Repuesto, Repuesto => Repuesto.id_repuesto)
     id_repuesto: Repuesto;
        
        
    
}

