import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, IProductCount, IProductId } from '../interfaces/product';
import connection from './connection';

export default class ProductModel {
  connection = connection;

  async create(newProduct: IProduct): Promise<IProductId> {
    const columns: string = Object.keys(newProduct).join(', ');
    const placeholders: string = Object.keys(newProduct).map((_key) => '?').join(', ');
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Products (${columns}) VALUE (${placeholders})`,
      [...Object.values(newProduct)],
    );
    return { id: insertId, ...newProduct };
  }

  async findAll(): Promise<IProductId[]> {
    const [result] = await this.connection.execute<IProductId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }

  async findByName(productName: string): Promise<IProductId> {
    const [[result]] = await this.connection.execute<IProductId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products WHERE name = ?',
      [productName],
    );
    return result;
  }

  async countById(productsIds: number[]): Promise<number> {
    const placeholders: string = productsIds.map((_key) => '?').join(', ');

    const [[{ idCount }]] = await this.connection.execute<IProductCount[] & RowDataPacket[]>(
      `SELECT COUNT(id) AS idCount FROM Trybesmith.Products WHERE id IN (${placeholders})`,
      [...productsIds],
    );
    return idCount;
  }

  async updateOrderId(productId: number, orderId: number) {
    return this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    );
  }
}
