import {Order} from '../order';
import {OrderSerialized} from '../serialized/order-serialized';
import {serializeProduct} from './serialize-product';

export function serializeOrder(order: Order): OrderSerialized {
  return {
    time: order.time.toISOString(),
    products: order.products.map(serializeProduct),
    firstName: order.firstName,
    lastName: order.lastName,
    street: order.state,
    city: order.city,
    state: order.state,
    email: order.email,
  }
}
