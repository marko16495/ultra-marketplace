import {createAction, props} from '@ngrx/store';
import {Basket} from '../../models/basket';

export const BasketActions = {
  LOAD_INIT: createAction(
    '[Basket] Load init',
  ),
  LOAD_SUCCESS: createAction(
    '[Basket] Load success',
    props<{ basket: Basket }>()
  ),
  LOAD_FAILURE: createAction(
    '[Basket] Load failure',
    props<{ error: any }>()
  ),

  ADD_PRODUCT_INIT: createAction(
    '[Basket] Add product int',
    props<{ productId: number }>()
  ),
  ADD_PRODUCT_SUCCESS: createAction(
    '[Basket] Add product success',
    props<{ basket: Basket, productId: number }>()
  ),
  ADD_PRODUCT_FAILURE: createAction(
    '[Basket] Add product failure',
    props<{ error: any, productId: number }>()
  ),

  REMOVE_PRODUCT_INIT: createAction(
    '[Basket] Remove product init',
    props<{ productId: number }>()
  ),
  REMOVE_PRODUCT_SUCCESS: createAction(
    '[Basket] Remove product success',
    props<{ basket: Basket, productId: number }>()
  ),
  REMOVE_PRODUCT_FAILURE: createAction(
    '[Basket] Remove product failure',
    props<{ error: any, productId: number }>()
  ),
}
