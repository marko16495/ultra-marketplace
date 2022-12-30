import {BasketState} from './basket-state';
import {ProductsState} from './products-state';

export interface AppState {
  products: ProductsState;
  basket: BasketState;
}
