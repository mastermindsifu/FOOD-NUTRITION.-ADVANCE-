/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("rowner")
export class RownerEntity{
@PrimaryGeneratedColumn()
id: number;
@Column()
name: string;
@Column()
email: string;
@Column()
password: string;
}
