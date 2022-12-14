import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { IUser, IUserId } from '../interfaces/user';
import connection from '../database/connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(newUser: IUser): Promise<IUserId> {
    const columns: string = Object.keys(newUser).join(', ');
    const placeholders: string = Object.keys(newUser).map((_key) => '?').join(', ');

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users (${columns}) VALUE (${placeholders})`,
      [...Object.values(newUser)],
    );
    return { id: insertId, ...newUser };
  }

  async findByUsername(username: string): Promise<IUserId> {
    const [[result]] = await this.connection.execute<IUserId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    return result;
  }
}
