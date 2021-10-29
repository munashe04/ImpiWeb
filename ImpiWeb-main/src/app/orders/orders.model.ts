import {OrderItem} from './item.model';

export class Order {
  public orderItems: OrderItem[];
  public customerName: string;
  public customerNumber: string;
  public dateCreated: string;
  public id: string;
  public createdBy: string;
  public refMobileNumber: string;
  public status: string;
  public orderStatus: string;
  public orderName: string;
  public currentOrderType: string;
  public quantity: string;
  public customerIdNumber: string;
  public customerAddress: string;
  public paymentTerms: string;
  public approvalStatus: string;

  public idImageUrl: string;
  public customerImageUrl: string;
  public sourceOfIncome: string;
  public createdByUserId: string;
  public menuStage: string;
  public currentItem: string;
  public menuSelected: string;

  constructor(customerName: string, customerNumber: string, dateCreated: string) {
    this.customerName = customerName;
    this.customerNumber = customerNumber;
    this.dateCreated = dateCreated;
  }
}
