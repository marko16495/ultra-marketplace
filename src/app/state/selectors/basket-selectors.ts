import {AppState} from '../models/app-state';

export const BasketSelectors = {
  products: (state: AppState) => state.basket.products,
  productsCount: (state: AppState) => state.basket.products.length
}
