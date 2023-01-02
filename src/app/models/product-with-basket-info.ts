import {Product} from './product';

export interface ProductWithBasketInfo {
  product: Product;
  inBasket: boolean;
  dirty: boolean;
}
