export interface IProduct {
  name: string,
  amount: string,
  orderId?: number,
}

export interface IProductId extends IProduct {
  id: number,
}

export interface IProductCount {
  idCount: number,
}

export interface IServiceProduct {
  statusCode: number,
  result: IProductId | IProductId[],
}
