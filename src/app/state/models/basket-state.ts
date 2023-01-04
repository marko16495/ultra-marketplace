import {Product} from '../../models/public/product';

export interface BasketState {
  /** Products in basket */
  products?: Product[];
  loading: boolean;
  /**
   * Contains ids of products that are being added to basket or removed.
   *
   * When user clicks on "Add to basket" button, id of the selected product is added to this array,
   * and it's removed from it when basket is updated.
   *
   * This is used to prevent users from trying to add same product to basket multiple times,
   * or to remove products from basket that are already removed.
   */
  dirtyProductIds: number[];
  error?: any;
}
