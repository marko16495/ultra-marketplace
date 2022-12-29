import {Products} from '../products';
import {ProductsSerialized} from '../serialized/products-serialized';
import {deserializeProduct} from './deserialize-product';

export function deserializeProducts(serialized: ProductsSerialized): Products {
  return {
    data: serialized.data.map(deserializeProduct),
    totalElements: serialized.totalElements
  }
}
