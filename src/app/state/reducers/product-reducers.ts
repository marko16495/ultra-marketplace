import {createReducer, on} from '@ngrx/store';
import {ProductActions} from '../actions/products-actions';
import {ProductsState} from '../models/products-state';

const initialState: ProductsState = {
  products: [],
  totalElements: 0,
  loading: false
}

export const productReducer = createReducer(
  initialState,
  on(ProductActions.LOAD_INIT, (state, args) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(ProductActions.LOAD_SUCCESS, (state, args) => {
    return {
      products: [...state.products, ...args.products.data],
      totalElements: args.products.totalElements,
      loading: false
    }
  }),
  on(ProductActions.LOAD_FAILURE, (state, args) => {
    return {
      ...state,
      loading: false,
      error: args.error
    }
  })
)
