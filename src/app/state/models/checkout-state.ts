import {CheckoutRequest} from '../../models/public/checkout-request';

export interface CheckoutState {
  checkoutRequest?: CheckoutRequest;
  inProgress: boolean;
  error?: any;
}
