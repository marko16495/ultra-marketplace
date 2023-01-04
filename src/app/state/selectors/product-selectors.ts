import {ProductWithBasketInfo} from '../../models/public/product-with-basket-info';
import {AppState} from '../models/app-state';

export const ProductSelectors = {
  products: (state: AppState) => state.products.products,
  productsCount: (state: AppState) => state.products.products.length,
  loading: (state: AppState) => state.products.loading,
  hasMore: (state: AppState) => state.products.products.length < state.products.totalElements,
  request: (state: AppState) => state.products.request,
  productsWithBasketInfo: (state: AppState): ProductWithBasketInfo[] => {
    const products = state.products.products;
    const basketProducts = state.basket.products!;
    return products.map(product => ({
      product: product,
      inBasket: basketProducts.findIndex(p => p.id === product.id) !== -1,
      dirty: state.basket.dirtyProductIds.includes(product.id)
    }))
  }
}
