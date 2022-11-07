import { RowDataPacket } from 'mysql2';
import { IOrderProducts } from '../interfaces/order';
import connection from './connection';

export default class OrderModel {
  connection = connection;

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
