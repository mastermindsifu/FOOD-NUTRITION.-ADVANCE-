/* eslint-disable prettier/prettier */

import { IsString, Matches, MinLength } from 'class-validator';

export class RownerDto {
@IsString()
@Matches(/^[a-zA-Z ]+$/, { message: 'Name must contain only letters,  and spaces' })
name: string;


@MinLength(6, { message: 'password must be at least 6 characters long' })
@Matches(/^(?=.*[a-z]).+$/, { message: 'Location must contain at least one lowercase letter' })
password: string;


@Matches(/^01\d{9}$/, { message: 'Phone must be a valid 11-digit phone number starting with 01' })
phone: string;
}