import { product } from './products.interface';

export interface GetProductsResponse {
  products: product[];
  total: number;
  skip: number;
  limit: number;
}
