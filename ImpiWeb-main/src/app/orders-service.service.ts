import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
 public getAllOrders() {
  return this.http.get('http://localhost:13001/orders');
  }
public getPendingOrders() {
    return this.http.get('http://localhost:13001/orders/pending');
    }
 public getDispatchedOrders() {
      return this.http.get('http://localhost:13001/orders/dispatched');
      }
      public dispatchOrder(id) {
        return this.http.get('http://localhost:13001/orders/dispatchOrder/'+id);
        }
        public deleteOrder(id) {
          return this.http.get('http://localhost:13001/orders/declineOrder/'+id);
          }     
          public paymentReceived(id) {
            return this.http.get('http://localhost:13001/orders/paymentReceived/'+id);
            }

}
