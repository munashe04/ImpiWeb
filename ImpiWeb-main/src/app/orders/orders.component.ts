import { Component, OnInit } from '@angular/core';
import {OrdersServiceService} from '../orders-service.service';
import {Order} from './orders.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['customerName', 'customerNumber', 'refMobileNumber', 'status'];
  dataSource: Order[];
  searchTerm: string;
  isLoadingOrders: boolean;
  constructor(private ordersService: OrdersServiceService, private router: Router ) { }

  ngOnInit(): void {
    this.isLoadingOrders = true;
    this.ordersService.getAllOrders().subscribe((orders: Order[]) => {
      console.log(orders);
      this.dataSource = orders;
      this.isLoadingOrders = false;
    });
  }

  // tslint:disable-next-line:typedef
  getAllOrders() {
    this.isLoadingOrders = true;
    this.ordersService.getAllOrders().subscribe((orders: Order[]) => {
      console.log(orders);
      this.dataSource = orders;
    });
    this.isLoadingOrders = false;
  }
  getDispatchedOrders() {
    this.isLoadingOrders = true;
    this.ordersService.getDispatchedOrders().subscribe((orders: Order[]) => {
      console.log(orders);
      this.dataSource = orders;
    });
    this.isLoadingOrders = false;
  }
  getPendingOrders() {
    this.isLoadingOrders = true;
    this.ordersService.getPendingOrders().subscribe((orders: Order[]) => {
      console.log(orders);
      this.dataSource = orders;
    });
    this.isLoadingOrders = false;
  }

  // tslint:disable-next-line:typedef
  onSelect(order: any) {
    console.log(order);
    // @ts-ignore
    this.router.navigate(['/order-item'], { fragment: order } );
    console.log('*******about to route****');
  }
}
