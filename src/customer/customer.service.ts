import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class CustomerService {
 
    private customers=[
{id :1, name : 'Tanzir',age: 23},
{id :2, name : 'Hasan', age:25},
{id :3, name : 'karim',age: 23},

    ];
//for all search
    getAllCustomerss(){
        return this.customers;
    }
//for specific search
    getCustomerById(id:number){
        const customer = this.customers.find((s)=>s.id===id);
        if(!customer) throw new NotFoundException('Value not found');
        return customer;
    }


 getCustomerByName(name:string){
    console.log(name)
        const customer = this.customers.find((d)=>d.name===name);
        if(!customer) throw new NotFoundException('Value not found');
        return customer;
    }

    getCustomerByAge(age:number){
    console.log(age)
        const customer = this.customers.find((d)=>d.age===age);
        if(!customer) throw new NotFoundException('Value not found');
        return customer;
    }
 //post
  createCustomer(data: {id:number; name: string; age: number}){
    const newCustomer={
      
        ...data,
    };
        this.customers.push(newCustomer);
        return newCustomer;

    }
  //put for all value update
  updateCustomer(id:number, data: {name: string; age:number}){
        const index = this.customers.findIndex((s)=>s.id===id);
        if(index=== -1) throw new NotFoundException('customer not found');
        this.customers[index]={id,...data};
        return this.customers[index];

  }

  //patch for single value update
  patchCustomer(id:number,data:Partial<{name: string; age:number}>){

    const customer=this.getCustomerById(id);
    Object.assign(customer,data);
    return customer;
  }
//delete
 deleteCustomer(id:number){
     const index = this.customers.findIndex((s)=>s.id===id);
        if(index=== -1) throw new NotFoundException('customer not found');
    const deleted =this.customers.splice(index,1);
    return {message:'Student id has been Deleted',student:deleted[0]};
 }

}
