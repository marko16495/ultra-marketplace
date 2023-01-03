import {createAction, props} from '@ngrx/store';
import {CheckoutRequest} from '../../models/public/checkout-request';

export const CheckoutActions = {
  CHECKOUT_INIT: createAction(
    '[Checkout] Init',
    props<{ checkoutRequest: CheckoutRequest }>()
  ),
  CHECKOUT_SUCCESS: createAction(
    '[Checkout] Success',
  ),
  CHECKOUT_FAILURE: createAction(
    '[Checkout] Failure',
    props<{ error: any }>()
  ),
}
