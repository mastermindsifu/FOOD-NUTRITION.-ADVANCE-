/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RownerDto } from './Rowner.dto';



@Injectable()
export class RownerService {
    createRowner(data: RownerDto, file: Express.Multer.File) {
        const newRowner = {
            ...data,
            file: file.originalname,
        };
        return newRowner;
    }


}

