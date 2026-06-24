import { Controller, Get, Param ,Post,Body,Put,Patch,Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAll(){
    return this.studentService.getAllStudents();
  }

   @Get('getid/:id')
  getOne(@Param('id') id:string){
    return this.studentService.getStudentById(Number(id));//converts string to number
  }


  @Post()
  create(@Body()body:StudentDto){
     return this.studentService.createStudent(body);
  }
  
  @Put(':id')
  update(@Param('id') id:string,@Body() body:StudentDto){
     return this.studentService.updateStudent(Number(id),body);
  }


  @Patch(':id')
  patch(@Param('id') id:string,@Body() body: Partial<StudentDto>){
     return this.studentService.patchStudent(Number(id),body);
  }

  @Delete(':id')
  remove(@Param('id') id:string){
     return this.studentService.deleteStudent(Number(id));
  }
}
