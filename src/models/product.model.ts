import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces/product';
import connection from './connection';

export default class ProductModel {
  connection = connection;

  async create(newProduct: IProduct): Promise<IProduct> {
    const columns: string = Object.keys(newProduct).join(', ');
    const placeholders: string = Object.keys(newProduct).map((_key) => '?').join(', ');
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Products (${columns}) VALUE (${placeholders})`,
      [...Object.values(newProduct)],
    );
    return { id: insertId, ...newProduct };
  }

  async findAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }

  async findByName(productName: string): Promise<IProduct> {
    const [[result]] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products WHERE name = ?',
      [productName],
    );
    return result;
  }
}