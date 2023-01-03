import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppConfigActions} from './state/actions/app-config-actions';
import {BasketActions} from './state/actions/basket-actions';
import {WalletActions} from './state/actions/wallet-actions';
import {AppState} from './state/models/app-state';
import {AppConfigSelectors} from './state/selectors/app-config-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  appConfig$ = this.store.select(AppConfigSelectors.appConfig);

  constructor(private readonly store: Store<AppState>) {
    // load application configuration
    this.store.dispatch(AppConfigActions.LOAD_INIT());
    // load basket
    this.store.dispatch(BasketActions.LOAD_INIT());
    // load wallet
    this.store.dispatch(WalletActions.LOAD_INIT());
  }
}
