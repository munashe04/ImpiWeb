import { PipeTransform, Pipe } from '@angular/core';
import { Order } from './orders/orders.model';
import { OrderItem } from './orders/item.model';

@Pipe({
    name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
    transform(order: Order[],item : OrderItem[], searchTerm: string,agentSearch:string,itemSearch:string): Order[] {
        if (order && order.length) {

        return (order.filter(order => {
           if(searchTerm && order.customerName.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
               return false;
           } 
           if(agentSearch && order.refMobileNumber.toLowerCase().indexOf(agentSearch.toLowerCase()) === -1){
               return false;
           }
           return true;

        })
        

    )
}
    }
}
