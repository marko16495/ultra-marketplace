import {Product} from '../../models/product';

export interface ProductsState {
  products: Product[];
  totalElements: number;
  loading: boolean;
  error?: string;
}
