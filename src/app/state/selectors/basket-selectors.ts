import {AppState} from '../models/app-state';

export const BasketSelectors = {
  products: (state: AppState) => state.basket.products,
  loading: (state: AppState) => state.basket.loading,
}
