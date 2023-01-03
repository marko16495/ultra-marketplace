import {CheckoutRequest} from '../../models/checkout-request';

export interface CheckoutState {
  checkoutRequest?: CheckoutRequest;
  inProgress: boolean;
  error?: any;
}
