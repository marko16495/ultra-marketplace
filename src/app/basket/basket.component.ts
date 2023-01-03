import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Product} from '../models/product';
import {BasketActions} from '../state/actions/basket-actions';
import {AppState} from '../state/models/app-state';
import {AppConfigSelectors} from '../state/selectors/app-config-selectors';
import {BasketSelectors} from '../state/selectors/basket-selectors';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent {

  products$ = this.store.select(BasketSelectors.productsExtended);
  productsCount$ = this.store.select(BasketSelectors.productsCount);
  totalPrice$ = this.store.select(BasketSelectors.totalPrice);
  currency$ = this.store.select(AppConfigSelectors.currency);
  balanceSufficient$ = this.store.select(BasketSelectors.balanceSufficient);

  constructor(private readonly store: Store<AppState>) { }

  removeProduct(product: Product) {
    this.store.dispatch(BasketActions.REMOVE_PRODUCT_INIT({productId: product.id}));
  }

}
