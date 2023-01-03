import {createReducer, on} from '@ngrx/store';
import {CheckoutActions} from '../actions/checkout-actions';
import {CheckoutState} from '../models/checkout-state';

const initialState: CheckoutState = {
  inProgress: false
}

export const checkoutReducer = createReducer(
  initialState,
  on(CheckoutActions.CHECKOUT_INIT, (state, args) => {
    return {
      checkoutRequest: args.checkoutRequest,
      inProgress: true
    }
  }),
  on(CheckoutActions.CHECKOUT_SUCCESS, (state, args) => {
    return {
      ...state,
      inProgress: false,
      error: undefined
    }
  }),
  on(CheckoutActions.CHECKOUT_FAILURE, (state, args) => {
    return {
      ...state,
      inProgress: false,
      error: args.error
    }
  })
)
