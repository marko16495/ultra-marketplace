import {createReducer, on} from '@ngrx/store';
import {BasketActions} from '../actions/basket-actions';
import {BasketState} from '../models/basket-state';


const initialState: BasketState = {
  loading: false,
  dirtyProductIds: [],
}

export const basketReducer = createReducer(
  initialState,
  on(BasketActions.LOAD_INIT, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(BasketActions.LOAD_SUCCESS, (state, args) => {
    return {
      products: [...args.basket.products],
      dirtyProductIds: [],
      error: undefined,
      loading: false
    }
  }),
  on(BasketActions.LOAD_FAILURE, (state, args) => {
    return {
      ...state,
      dirtyProductIds: [],
      error: args.error,
      loading: false
    }
  }),
  on(BasketActions.ADD_PRODUCT_INIT, (state, args) => {
    return {
      ...state,
      dirtyProductIds: [...state.dirtyProductIds, args.productId]
    }
  }),
  on(BasketActions.ADD_PRODUCT_SUCCESS, (state, args) => {
    return {
      ...state,
      products: [...args.basket.products],
      dirtyProductIds: state.dirtyProductIds.filter(id => id !== args.productId)
    }
  }),
  on(BasketActions.ADD_PRODUCT_FAILURE, (state, args) => {
    return {
      ...state,
      dirtyProductIds: state.dirtyProductIds.filter(id => id !== args.productId),
      error: args.error
    }
  }),
  on(BasketActions.REMOVE_PRODUCT_INIT, (state, args) => {
    return {
      ...state,
      dirtyProductIds: [...state.dirtyProductIds, args.productId]
    }
  }),
  on(BasketActions.REMOVE_PRODUCT_SUCCESS, (state, args) => {
    return {
      ...state,
      products: [...args.basket.products],
      dirtyProductIds: state.dirtyProductIds.filter(id => id !== args.productId)
    }
  }),
  on(BasketActions.REMOVE_PRODUCT_FAILURE, (state, args) => {
    return {
      ...state,
      dirtyProductIds: state.dirtyProductIds.filter(id => id !== args.productId),
      error: args.error
    }
  }),
)
