import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { IOrderProducts } from '../interfaces/order';
import connection from '../database/connection';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUE (?)',
      [userId],
    );
    return insertId;
  }

  async findAllWithProducts(): Promise<IOrderProducts[]> {
    const [result] = await this.connection.execute<IOrderProducts[] & RowDataPacket[]>(
      `SELECT ord.*, JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS prod
      ON ord.id = prod.orderId
      GROUP BY ord.id`,
    );
    return result;
  }
}
