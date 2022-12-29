import {Product} from '../product';
import {ProductSerialized} from '../serialized/product-serialized';

export function serializeProduct(product: Product): ProductSerialized {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img
  }
}
