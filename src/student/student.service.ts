import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
 
    private students=[
{id :1, name : 'Tanzir',age: 23},
{id :2, name : 'Hasan', age:25}

    ];
//for all search
    getAllStudents(){
        return this.students;
    }
//for specific search
    getStudentById(id:number){
        const student = this.students.find((s)=>s.id===id);
        if(!student) throw new NotFoundException('Value not found');
        return student;
    }

 //post
  createStudent(data: {id:number; name: string; age: number}){
    const newStudent={
      
        ...data,
    };
        this.students.push(newStudent);
        return newStudent;

    }
  //put for all value update
  updateStudent(id:number, data: {name: string; age:number}){
        const index = this.students.findIndex((s)=>s.id===id);
        if(index=== -1) throw new NotFoundException('student not found');
        this.students[index]={id,...data};
        return this.students[index];

  }

  //patch for single value update
  patchStudent(id:number,data:Partial<{name: string; age:number}>){

    const student=this.getStudentById(id);
    Object.assign(student,data);
    return student;
  }
//delete
 deleteStudent(id:number){
     const index = this.students.findIndex((s)=>s.id===id);
        if(index=== -1) throw new NotFoundException('student not found');
    const deleted =this.students.splice(index,1);
    return {message:'Student id has been Deleted',student:deleted[0]};
 }

}
