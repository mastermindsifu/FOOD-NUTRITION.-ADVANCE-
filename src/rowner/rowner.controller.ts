/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Post, UseInterceptors, UploadedFile, Body, ValidationPipe } from '@nestjs/common';
import { RownerService } from './rowner.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { RownerDto } from './Rowner.dto';
import { MulterError, diskStorage } from 'multer';

@Controller('Rowner')
export class RownerController {
    constructor(private readonly rownerService: RownerService) {}
    @Post('/add')
    @UseInterceptors(
        FileInterceptor('file', {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(pdf)$/)) {
                    cb(null, true);
                } else {
                    cb(new Error('Only pdf files are allowed!'), false);
                }
            },
        }),
    )
     addRowner(
        @Body(new ValidationPipe())
        data: RownerDto,
        @UploadedFile() 
        file: Express.Multer.File,
       
    ) {
        return this.rownerService.createRowner(data, file);
    }
}
