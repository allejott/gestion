import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 20 })
  telefono: string;

  @Column({ length: 150 })
  direccion: string;

  @Column({
    type: 'enum',
    enum: ['cliente', 'mecánico', 'administrador'],
  })
  rol: 'cliente' | 'mecánico' | 'administrador';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;
}
