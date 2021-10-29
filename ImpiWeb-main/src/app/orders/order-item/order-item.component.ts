import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../orders.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {OrderItem} from '../item.model';
import { OrdersServiceService } from 'src/app/orders-service.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;
  item: OrderItem[];
  isImagesLoading: boolean;
  isImage1Loaded: boolean;
  isImage2Loaded: boolean;
  alert : boolean = false;
  alertDecline : boolean = false;
  constructor(private route: ActivatedRoute, private router: Router,private orderService: OrdersServiceService ) { }

  ngOnInit(): void {
    // @ts-ignore
    // console.log(this.route.snapshot.paramMap.get('order'));
    console.log( this.route.snapshot.fragment);
    this.order = Object.assign(this.route.snapshot.fragment, this.order);
    this.item = this.order.orderItems;
    this.isImagesLoading = true;
    console.log('*******order casting with items****' + this.item);
    console.log(this.order);
   // this.route.snapshot.paramMap.get('order');
  }

  // tslint:disable-next-line:typedef
  updateImageLoaded1() {
    console.log('*******updateImageLoaded1****');
    this.isImage1Loaded = true;
    if (this.isImage1Loaded && this.isImage2Loaded){
      this.isImagesLoading = false;
    }
  }
  // tslint:disable-next-line:typedef
  updateImageLoaded2() {
    console.log('*******updateImageLoaded2****');
    this.isImage2Loaded = true;
    if (this.isImage1Loaded && this.isImage2Loaded){
      this.isImagesLoading = false;
    }
  }
  declineOrder(id){
    this.orderService.deleteOrder(id).subscribe();
    this.alertDecline = true;

  }
  dispatchOrder(id){
    this.orderService.dispatchOrder(id).subscribe();
    this.alert = true;

  }
  paymentReceived(id){
    this.orderService.paymentReceived(id).subscribe();

  }
  

  // tslint:disable-next-line:typedef
  backToOrder() {
    console.log('*******about go back to orders****');
    // @ts-ignore
    this.router.navigate(['/orders'] );
  }
}
