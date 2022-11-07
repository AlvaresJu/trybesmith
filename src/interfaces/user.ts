export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUserId extends IUser {
  id: number,
}

export interface IServiceUser {
  statusCode: number,
  result: string,
}

export interface IAuthData {
  id: number,
  username: string,
  iat?: number,
  exp?: number,
}
