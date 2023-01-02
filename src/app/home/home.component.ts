import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {GetProductsRequest} from '../models/get-products-request';
import {Product} from '../models/product';
import {BasketActions} from '../state/actions/basket-actions';
import {ProductActions} from '../state/actions/products-actions';
import {AppState} from '../state/models/app-state';
import {AppConfigSelectors} from '../state/selectors/app-config-selectors';
import {ProductSelectors} from '../state/selectors/product-selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  currency$ = this.store.select(AppConfigSelectors.currency);
  productsWithBasketInfo$ = this.store.select(ProductSelectors.productsWithBasketInfo);
  hasMore$ = this.store.select(ProductSelectors.hasMore);
  loading$ = this.store.select(ProductSelectors.loading);

  private readonly initialRequest: GetProductsRequest = {
    pageIndex: 0,
    pageSize: 24
  };

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(ProductActions.LOAD_INIT({request: this.initialRequest}));
  }

  loadMore() {
    this.store.dispatch(ProductActions.LOAD_MORE());
  }

  addProductToBasket(product: Product) {
    this.store.dispatch(BasketActions.ADD_PRODUCT_INIT({productId: product.id}));
  }

  removeProductFromBasket(product: Product) {
    this.store.dispatch(BasketActions.REMOVE_PRODUCT_INIT({productId: product.id}));
  }

}