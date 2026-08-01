/* eslint-disable prettier/prettier */
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('rs')
export class Rs {
    @PrimaryColumn()
    id: number;
    @Column({unique: true, length: 100})
    username: string;
    @Column({length: 150})
    fullname: string;
    @Column({ default: false })
    isActive: boolean;
    @BeforeInsert()
    generateId(){
        this.id = Math.floor(Math.random() * 1000000);
    }
    @IsSt
}