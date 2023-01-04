import {AppState} from '../models/app-state';

export const BasketSelectors = {
  products: (state: AppState) => state.basket.products,
  productsCount: (state: AppState) => state.basket.products!.length,
  basketEmpty: (state: AppState) => state.basket.products!.length === 0,
  loading: (state: AppState) => state.basket.loading,
  totalPrice: (state: AppState) => state.basket.products!.reduce((a, p) => a + p.price, 0),
  productsExtended: (state: AppState) => state.basket.products!.map(product => ({
    product: product,
    dirty: state.basket.dirtyProductIds.includes(product.id)
  })),
  balanceSufficient: (state: AppState) => {
    const totalPrice = state.basket.products!.reduce((a, p) => a + p.price, 0);
    const balance = state.wallet.wallet!.balance;
    return balance >= totalPrice;
  }
}
