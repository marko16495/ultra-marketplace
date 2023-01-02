import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../state/models/app-state';
import {AppConfigSelectors} from '../state/selectors/app-config-selectors';
import {BasketSelectors} from '../state/selectors/basket-selectors';
import {WalletSelectors} from '../state/selectors/wallet-selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  basketProducts$ = this.store.select(BasketSelectors.products);
  walletBalance$ = this.store.select(WalletSelectors.balance);
  appConfig$ = this.store.select(AppConfigSelectors.appConfig);

  constructor(private readonly store: Store<AppState>) { }

}
