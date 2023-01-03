import {Product} from './product';

export interface Order {
  time: Date;
  products: Product[];
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  email: string;
}
