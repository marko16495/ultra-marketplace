import {InjectionToken} from '@angular/core';
import {OrderSerialized} from '../models/serialized/order-serialized';

export const INITIAL_ORDERS = new InjectionToken<OrderSerialized[]>('INITIAL_ORDERS', {
  providedIn: 'root',
  factory: () => ([])
})
