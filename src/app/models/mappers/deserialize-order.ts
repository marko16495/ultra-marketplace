import {Order} from '../order';
import {OrderSerialized} from '../serialized/order-serialized';
import {deserializeProduct} from './deserialize-product';

export function deserializeOrder(serialized: OrderSerialized): Order {
  return {
    time: new Date(serialized.time),
    products: serialized.products.map(deserializeProduct),
    firstName: serialized.firstName,
    lastName: serialized.lastName,
    street: serialized.state,
    city: serialized.city,
    state: serialized.state,
    email: serialized.email,
  }
}
