import { IOrder } from '../interfaces/order.interface';
import OrderModel from '../models/order.model';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public findAll = async () => {
    const orders: IOrder[] = await this.model.findAll();
    return orders;
  };
}
