import {createAction, props} from '@ngrx/store';
import {GetProductsRequest} from '../../models/public/get-products-request';
import {Products} from '../../models/public/products';

export const ProductActions = {
  LOAD_INIT: createAction(
    '[Products] Load init',
    props<{ request: GetProductsRequest }>()
  ),
  LOAD_SUCCESS: createAction(
    '[Products] Load success',
    props<{ products: Products }>()
  ),
  LOAD_FAILURE: createAction(
    '[Products] Load failure',
    props<{ error: any }>()
  ),
  LOAD_MORE: createAction(
    '[Products] Load more'
  ),
  CLEAR: createAction(
    '[Products] Clear'
  )
}
