export interface IProduct {
    id: string,
    title: string,
    desc: string,
    price: number,
    createdAt: string,
    stock: number,
}

export interface IProductData {
    title?: string;
    desc?: string;
    price?: number;
    stock?: number;
    color?: string;
    size?: string;
  }