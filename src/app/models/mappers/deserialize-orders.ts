import {Orders} from '../public/orders';
import {OrdersSerialized} from '../serialized/orders-serialized';
import {deserializeOrder} from './deserialize-order';

export function deserializeOrders(serialized: OrdersSerialized): Orders {
  return {
    data: serialized.data.map(deserializeOrder),
    totalElements: serialized.totalElements
  }
}
