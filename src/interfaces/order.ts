export interface IOrderId {
  id?: number,
  userId: number,
}

export interface IOrderProducts extends IOrderId {
  productsIds: number[],
}

export interface IServiceOrder {
  statusCode: number,
  result: IOrderProducts | IOrderProducts[],
}
