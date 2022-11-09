import Joi from 'joi';
import { IServiceOrder } from '../interfaces/order';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import HttpException from '../utils/httpException';

export default class OrderService {
  private orderModel: OrderModel;

  private productModel: ProductModel;

  private productsIdsSchema: Joi.ArraySchema;
  
  constructor() {
    this.orderModel = new OrderModel();
    this.productModel = new ProductModel();
    this.productsIdsSchema = Joi.array().min(1).items(Joi.number().integer().min(1)).unique()
      .required()
      .label('productsIds')
      .messages({
        'array.min': '"productsIds" must include only numbers',
      });
  }

  private validateOrderData(productsIds: number[]): number[] {
    const { error, value } = this.productsIdsSchema.validate(productsIds);
    if (error) throw new HttpException(422, error.message);

    return value;
  }

  private async checkProducts(productsIds: number[]): Promise<boolean> {
    const productsInDb = await this.productModel.countById(productsIds);
    return productsInDb !== productsIds.length;
  }

  async updateOrderProducts(productsIds: number[], orderId: number) {
    const updatePromiseList = productsIds
      .map(async (id) => this.productModel.updateOrderId(id, orderId));
    return Promise.all(updatePromiseList);
  }

  async insert(productsIds: number[], userId: number): Promise<IServiceOrder> {
    const products = this.validateOrderData(productsIds);

    if (await this.checkProducts(products)) {
      throw new HttpException(400, 'One or more "productsIds" not found');
    }

    const orderId = await this.orderModel.create(userId);
    await this.updateOrderProducts(productsIds, orderId);
    return { statusCode: 201, result: { userId, productsIds } };
  }

  async getAllWithProducts(): Promise<IServiceOrder> {
    const orders = await this.orderModel.findAllWithProducts();
    return { statusCode: 200, result: orders };
  }
}
