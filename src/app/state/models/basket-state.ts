import {Product} from '../../models/product';

export interface BasketState {
  products: Product[];
  loading: boolean;
  dirtyProductIds: number[];
  error?: any;
}
