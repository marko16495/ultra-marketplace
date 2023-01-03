import {Product} from '../public/product';
import {ProductSerialized} from '../serialized/product-serialized';

export function deserializeProduct(serialized: ProductSerialized): Product {
  return {
    id: serialized.id,
    name: serialized.name,
    price: serialized.price,
    img: serialized.img
  }
}
