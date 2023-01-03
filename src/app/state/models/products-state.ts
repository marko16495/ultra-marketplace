import {GetProductsRequest} from '../../models/public/get-products-request';
import {Product} from '../../models/public/product';

export interface ProductsState {
  request?: GetProductsRequest;
  products: Product[];
  totalElements: number;
  loading: boolean;
  error?: string;
}
