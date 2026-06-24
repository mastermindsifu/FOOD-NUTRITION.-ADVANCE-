import { Body, Controller, Get, Param ,Post,Put,Patch,Delete,Query} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryDto } from './delivery.dto';
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService)
   {};

  @Get()
  getAll() {
    return this.deliveryService.getAllDeliveryman();  }
    
    
     @Get('get/:id')
  getOne(@Param('id')id:string) {
    return this.deliveryService.getDeliverymanById(Number(id));  }    


        @Get('searchbyname')
searchDelivery(@Query('name') name: string) {
    console.log("name: "+name)
  return this.deliveryService.getDeliveryByName(name);
}
    
  
    @Post()
  create(@Body()body:DeliveryDto) {
    return this.deliveryService.createDelivery(body);  } 


     @Put(':id')
  update(@Param('id')id:string,@Body()body:DeliveryDto) {
    return this.deliveryService.updateDelivery(Number(id),body);  }    
  
    
   @Patch(':id')
  patch(@Param('id')id:string,@Body()body:Partial<DeliveryDto>) {
    return this.deliveryService.patchDelivery(Number(id),body);  }    
  

@Delete(':id')
  remove(@Param('id')id:string) {
    return this.deliveryService.deleteDelivery(Number(id));  }    
  


                                                                                      

  }

