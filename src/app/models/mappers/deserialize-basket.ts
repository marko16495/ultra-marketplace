import {Basket} from '../basket';
import {BasketSerialized} from '../serialized/basket-serialized';
import {deserializeProduct} from './deserialize-product';

export function deserializeBasket(serialized: BasketSerialized): Basket {
  return {
    products: serialized.products.map(deserializeProduct)
  }
}
