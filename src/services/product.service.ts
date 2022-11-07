import Joi from 'joi';
import { IProduct, IServiceProduct } from '../interfaces/product';
import ProductModel from '../models/product.model';
import HttpException from '../utils/httpException';

export default class ProductService {
  productModel = new ProductModel();

  productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  validateProductData(newProduct: IProduct): IProduct {
    const { error, value } = this.productSchema.validate(newProduct);
    if (error) throw new HttpException(422, error.message);
  
    return value;
  }

  async insert(newProduct: IProduct): Promise<IServiceProduct> {
    const { name, amount } = this.validateProductData(newProduct);

    if (await this.productModel.findByName(name)) {
      throw new HttpException(409, 'Product already registered');
    }

    const product = await this.productModel.create({ name, amount });
    return { statusCode: 201, result: product };
  }

  async getAll(): Promise<IServiceProduct> {
    const products = await this.productModel.findAll();
    return { statusCode: 200, result: products };
  }
}
