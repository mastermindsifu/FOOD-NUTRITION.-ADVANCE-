/* eslint-disable prettier/prettier */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
import { OneToMany } from 'typeorm';
import { Menu } from '../menu/menu.enity';
import { OneToOne } from 'typeorm';
import { RestaurantDetail } from '../restaurant-detail/restaurant-detail.entity';



@Entity()
export class Restaurant {


    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    name:string;


    @Column()
    address:string;


    @Column()
    phone:string;


    @Column({
        default:true
    })
    isActive:boolean;

    @OneToMany(() => Menu, (menu) => menu.restaurant)
    menus: Menu[];

    @OneToOne(
    ()=>RestaurantDetail,
    (detail)=>detail.restaurant,
)

   detail:RestaurantDetail;
   


}