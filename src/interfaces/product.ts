export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface IServiceProduct {
  statusCode: number,
  result: IProduct | IProduct[],
}
