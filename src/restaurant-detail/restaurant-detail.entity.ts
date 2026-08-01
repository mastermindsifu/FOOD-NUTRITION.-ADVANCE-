/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Restaurant } from '../restaurant/restaurant.entity';

@Entity()
export class RestaurantDetail {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    openingTime:string;

    @Column()
    closingTime:string;

    @Column()
    description:string;

    @OneToOne(
        ()=>Restaurant,
        (restaurant)=>restaurant.detail,
        {
            onDelete:'CASCADE',
        },
    )

    @JoinColumn()

    restaurant:Restaurant;

}