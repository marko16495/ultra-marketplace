import {InjectionToken} from '@angular/core';
import {ProductSerialized} from '../models/serialized/product-serialized';

// todo: upload images to imgur

export const INITIAL_PRODUCTS = new InjectionToken<ProductSerialized[]>('INITIAL_PRODUCTS', {
  providedIn: 'root',
  factory: () => ([
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      img: 'https://randompicturegenerator.com/img/dragon-generator/ge9cd89a0d5fcfe1385e543e904d0296c632841f303fad6e419b2772deeb576d4661bbf0d00a8c8e925f2631786dac9a5_640.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 129.99,
      img: 'https://randompicturegenerator.com/img/dragon-generator/g63e03f04488034be372006d7af0c695d54761095519febc0826f1082c44bdb0a495fa74335635a5614804ecf2e6ce440_640.png'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      img: 'https://randompicturegenerator.com/img/dragon-generator/g0da0a751f61fa729e6294f9614c6fe387a40a8d469716c21ccbf918b026a3045b6bcc44fac0395d8117fb3a6100f8f59_640.jpg'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 149.99,
      img: 'https://randompicturegenerator.com/img/dragon-generator/geccdfe6e80a93e2ad6271ecaddf928767f72d4f4a1ceb3737a39d435b899cc035e82db92b41b51afa8e0d33f92e9547c_640.jpg'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 259.90,
      img: 'https://randompicturegenerator.com/img/dragon-generator/g66b65831a8b61346858bc34069ff9cc7e9c1a9762c7befb0d15346fb74af26aadf82068b6d9240e2f92af3ed0aec8335_640.jpg'
    },
    {
      id: 6,
      name: 'Product 6',
      price: 69.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 7,
      name: 'Product 7',
      price: 379.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 8,
      name: 'Product 8',
      price: 89,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 9,
      name: 'Product 9',
      price: 599.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 10,
      name: 'Product 10',
      price: 199.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 11,
      name: 'Product 11',
      price: 99.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
    },
    {
      id: 12,
      name: 'Product 12',
      price: 12.99,
      img: 'https://i.imgur.com/hk1E372.jpg'
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
