import {InjectionToken} from '@angular/core';
import {BasketSerialized} from '../models/serialized/basket-serialized';

export const INITIAL_BASKET = new InjectionToken<BasketSerialized>('INITIAL_BASKET', {
  providedIn: 'root',
  factory: () => ({
    products: []
  })
})
