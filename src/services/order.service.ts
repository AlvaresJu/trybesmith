import { IServiceOrder } from '../interfaces/order';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAllWithProducts(): Promise<IServiceOrder> {
    const orders = await this.orderModel.findAllWithProducts();
    return { statusCode: 200, result: orders };
  }
}
