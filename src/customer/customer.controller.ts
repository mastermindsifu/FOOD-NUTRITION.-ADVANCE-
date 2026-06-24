import { Controller, Get, Param ,Post,Body,Put,Patch,Delete,Query} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './customer.dto';
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAll(){
    return this.customerService.getAllCustomerss();
  }

   @Get('getid/:id')
  getOne(@Param('id') id:string){
      console.log("id: "+id)
    return this.customerService.getCustomerById(Number(id));//converts string to number
  }

     @Get('getage/:age')
  getOneAge(@Param('age') age:string){
      console.log("age: "+age)
    return this.customerService.getCustomerByAge(Number(age));//converts string to number
  }
@Get('searchbyname')
searchCustomer(@Query('name') name: string) {
    console.log("name: "+name)
  return this.customerService.getCustomerByName(name);
}

  @Post()
  create(@Body()body:CustomerDto){
     return this.customerService.createCustomer(body);
  }
  
  @Put(':id')
  update(@Param('id') id:string,@Body() body:CustomerDto){
     return this.customerService.updateCustomer(Number(id),body);
  }


  @Patch(':id')
  patch(@Param('id') id:string,@Body() body: Partial<CustomerDto>){
     return this.customerService.patchCustomer(Number(id),body);
  }

  @Delete(':id')
  remove(@Param('id') id:string){
     return this.customerService.deleteCustomer(Number(id));
  }
}
