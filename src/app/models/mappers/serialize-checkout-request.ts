import {CheckoutRequest} from '../public/checkout-request';
import {CheckoutRequestSerialized} from '../serialized/checkout-request-serialized';

export function serializeCheckoutRequest(request: CheckoutRequest): CheckoutRequestSerialized {
  return {
    firstName: request.firstName,
    lastName: request.lastName,
    street: request.state,
    city: request.city,
    state: request.state,
    email: request.email
  }
}
