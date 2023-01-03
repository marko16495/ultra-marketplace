import {Component, ChangeDetectionStrategy, HostBinding} from '@angular/core';
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

  basketProductsCount$ = this.store.select(BasketSelectors.productsCount);
  walletBalance$ = this.store.select(WalletSelectors.balance);
  currency$ = this.store.select(AppConfigSelectors.currency);

  @HostBinding('class') private cssClasses = 'vw-100 vh-100 d-block';

  constructor(private readonly store: Store<AppState>) { }

}
