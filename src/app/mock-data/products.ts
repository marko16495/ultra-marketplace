import {InjectionToken} from '@angular/core';
import {ProductSerialized} from '../models/serialized/product-serialized';

export const INITIAL_PRODUCTS = new InjectionToken<ProductSerialized[]>('INITIAL_PRODUCTS', {
  providedIn: 'root',
  factory: () => ([
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      img: undefined
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      img: undefined
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      img: undefined
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      img: undefined
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.90,
      img: undefined
    },
    {
      id: 6,
      name: 'Product 6',
      price: 69.99,
      img: undefined
    },
    {
      id: 7,
      name: 'Product 7',
      price: 79.99,
      img: undefined
    },
    {
      id: 8,
      name: 'Product 8',
      price: 89,
      img: undefined
    },
    {
      id: 9,
      name: 'Product 9',
      price: 99.99,
      img: undefined
    },
    {
      id: 10,
      name: 'Product 10',
      price: 99.99,
      img: undefined
    },
    {
      id: 11,
      name: 'Product 11',
      price: 99.99,
      img: undefined
    },
    {
      id: 12,
      name: 'Product 12',
      price: 12.99,
      img: undefined
    },
    {
      id: 13,
      name: 'Product 13',
      price: 13.5,
      img: undefined
    },
    {
      id: 14,
      name: 'Product 14',
      price: 14.5,
      img: undefined
    },
    {
      id: 15,
      name: 'Product 15',
      price: 9.9,
      img: undefined
    },
    {
      id: 16,
      name: 'Product 16',
      price: 10.9,
      img: undefined
    },
    {
      id: 17,
      name: 'Product 17',
      price: 89.9,
      img: undefined
    },
  ])
})
