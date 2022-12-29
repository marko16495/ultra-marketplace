import {ProductSerialized} from './product-serialized';

export interface OrderSerialized {
  time: string;
  products: ProductSerialized[];
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  email: string;
}
