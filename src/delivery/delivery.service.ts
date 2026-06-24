import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DeliveryService {

  private deliveryman =[
    
    {id :1,name : 'Mithila', age  : 16 },
    {id :2,name : 'Elma', age  :30},
    {id :3,name : ' Shila ', age  : 47},
];

getAllDeliveryman(){
    return this.deliveryman;
}

getDeliverymanById(id :number){

    const delivery =this.deliveryman.find((d)=>d.id === id);
    
    if(!delivery) throw new NotFoundException('Not Found');
    return delivery;
}

getDeliveryByName(name:string){
    console.log(name)
        const delivery = this.deliveryman.find((d)=>d.name===name);
        if(!delivery) throw new NotFoundException('Value not found');
        return delivery;
    }

createDelivery(data:{name:string;age:number}){

    const newDelivery={

        id:Date.now(),
        ...data,
    };

    this.deliveryman.push(newDelivery);

    return newDelivery;
}

updateDelivery(id:number,data:{name:string;age:number}){

    const index =this.deliveryman.findIndex((d)=>d.id===id);

    if(index===-1) throw new NotFoundException('Not found');

    this.deliveryman[index]={id,...data};

    return this.deliveryman[index];
}

patchDelivery(id:number,data:Partial<{name:string;age:number}>){

  const delivery =this.getDeliverymanById(id);
  Object.assign(delivery,data);
  return delivery;

}

deleteDelivery(id :number){

    const index =this.deliveryman.findIndex((d)=>d.id===id);

    if(index===-1) throw new NotFoundException('Deleted');

    const deleted =this.deliveryman.splice(index,1)
    return{massage:'Data Deleted',delivery:deleted[0]};

    
}

 
    
}
