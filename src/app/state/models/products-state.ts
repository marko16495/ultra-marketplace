import {GetProductsRequest} from '../../models/get-products-request';
import {Product} from '../../models/product';

export interface ProductsState {
  request?: GetProductsRequest;
  products: Product[];
  totalElements: number;
  loading: boolean;
  error?: string;
}
