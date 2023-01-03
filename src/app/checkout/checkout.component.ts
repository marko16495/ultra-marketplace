import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map} from 'rxjs';
import {CheckoutRequest} from '../models/public/checkout-request';
import {CheckoutActions} from '../state/actions/checkout-actions';
import {AppState} from '../state/models/app-state';
import {AppConfigSelectors} from '../state/selectors/app-config-selectors';
import {BasketSelectors} from '../state/selectors/basket-selectors';
import {CheckoutSelectors} from '../state/selectors/checkout-selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {

  totalPrice$ = this.store.select(BasketSelectors.totalPrice);
  currency$ = this.store.select(AppConfigSelectors.currency);
  inProgress$ = this.store.select(CheckoutSelectors.inProgress);

  checkoutComplete$ = this.actions$.pipe(
    ofType(CheckoutActions.CHECKOUT_SUCCESS),
    map(() => true)
  );

  constructor(
    private readonly store: Store<AppState>,
    private readonly actions$: Actions,
  ) { }

  checkout(value: CheckoutRequest) {
    this.store.dispatch(CheckoutActions.CHECKOUT_INIT({checkoutRequest: {...value}}))
  }

}
