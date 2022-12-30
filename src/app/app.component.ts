import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {LocalStorageService} from './services/local-storage.service';
import {BasketActions} from './state/actions/basket-actions';
import {ProductActions} from './state/actions/products-actions';
import {AppState} from './state/models/app-state';
import {BasketSelectors} from './state/selectors/basket-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ultra-marketplace';
  basketProducts$ = this.store.select(BasketSelectors.products);

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

    this.store.dispatch(BasketActions.LOAD_INIT())

    this.store.select(state => state).subscribe(console.log)
  }
}
