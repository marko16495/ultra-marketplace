import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {BasketActions} from './state/actions/basket-actions';
import {ProductActions} from './state/actions/products-actions';
import {AppState} from './state/models/app-state';
import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultra-marketplace';
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(ProductActions.LOAD_INIT({
      request: {
        pageIndex: 0,
        pageSize: 5,
      }
    }))
    setTimeout(() => {
      this.store.dispatch(ProductActions.LOAD_INIT({
        request: {
          pageIndex: 1,
          pageSize: 5,
        }
      }))
    }, 6 * 1000)

    setTimeout(() => {
      this.store.dispatch(ProductActions.LOAD_INIT({
        request: {
          pageIndex: 2,
          pageSize: 5,
        }
      }))
    }, 10 * 1000)

    this.store.dispatch(BasketActions.LOAD_INIT())

    setTimeout(() => {
      this.store.dispatch(BasketActions.ADD_PRODUCT_INIT({
        productId: 2
      }))
    }, 5 * 1000)

    this.store.select(state => state).subscribe(console.log)
  }
}
