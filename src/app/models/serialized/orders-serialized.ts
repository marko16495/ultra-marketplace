import {OrderSerialized} from './order-serialized';

export interface OrdersSerialized {
  data: OrderSerialized[];
  totalElements: number;
}
