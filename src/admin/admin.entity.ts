/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false})
  password: string;
}