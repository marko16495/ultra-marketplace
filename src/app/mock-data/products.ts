import {InjectionToken} from '@angular/core';
import {ProductSerialized} from '../models/serialized/product-serialized';

// images taken from https://randomwordgenerator.com/picture.php

export const INITIAL_PRODUCTS = new InjectionToken<ProductSerialized[]>('INITIAL_PRODUCTS', {
  providedIn: 'root',
  factory: () => ([
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      img: 'https://i.imgur.com/f2WSLEd.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 129.99,
      img: 'https://i.imgur.com/xDC7GTM.png',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      img: 'https://i.imgur.com/s31OIY5.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 149.99,
      img: 'https://i.imgur.com/YfO8pV9.jpg'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 259.90,
      img: 'https://i.imgur.com/6T4VRGs.jpg'
    },
    {
      id: 6,
      name: 'Product 6',
      price: 69.99,
      img: 'https://i.imgur.com/BnxwqYc.jpg'
    },
    {
      id: 7,
      name: 'Product 7',
      price: 379.99,
      img: 'https://i.imgur.com/R3WVrsa.jpg'
    },
    {
      id: 8,
      name: 'Product 8',
      price: 89,
      img: 'https://i.imgur.com/19KUG15.jpg'
    },
    {
      id: 9,
      name: 'Product 9',
      price: 599.99,
      img: 'https://i.imgur.com/01j4yf1.jpg'
    },
    {
      id: 10,
      name: 'Product 10',
      price: 199.99,
      img: 'https://i.imgur.com/KD4D6Cx.jpg'
    },
    {
      id: 11,
      name: 'Product 11',
      price: 99.99,
      img: 'https://i.imgur.com/Ivq0YKO.jpg'
    },
    {
      id: 12,
      name: 'Product 12',
      price: 12.99,
      img: 'https://i.imgur.com/aAYJoQl.jpg'
    },
    {
      id: 13,
      name: 'Product 13',
      price: 13.5,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 14,
      name: 'Product 14',
      price: 614.5,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 15,
      name: 'Product 15',
      price: 9.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 16,
      name: 'Product 16',
      price: 10.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 17,
      name: 'Product 17',
      price: 89.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 18,
      name: 'Product 18',
      price: 29.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 19,
      name: 'Product 19',
      price: 249.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 20,
      name: 'Product 20',
      price: 399.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 21,
      name: 'Product 21',
      price: 199.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 22,
      name: 'Product 22',
      price: 112.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 23,
      name: 'Product 23',
      price: 13.5,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 24,
      name: 'Product 24',
      price: 714.5,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 25,
      name: 'Product 25',
      price: 59.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 26,
      name: 'Product 26',
      price: 10.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 27,
      name: 'Product 27',
      price: 89.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 28,
      name: 'Product 28',
      price: 29.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 29,
      name: 'Product 29',
      price: 49.9,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },

  ])
})
