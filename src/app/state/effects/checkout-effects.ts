import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, of} from 'rxjs';
import {CheckoutDataService} from '../../services/data/checkout-data.service';
import {BasketActions} from '../actions/basket-actions';
import {CheckoutActions} from '../actions/checkout-actions';
import {WalletActions} from '../actions/wallet-actions';

@Injectable({
  providedIn: 'root'
})
export class CheckoutEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly checkoutDataService: CheckoutDataService,
  ) {
  }

  checkout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CheckoutActions.CHECKOUT_INIT),
      switchMap(action => this.checkoutDataService.checkout(action.checkoutRequest)),
      map(() => CheckoutActions.CHECKOUT_SUCCESS()),
      catchError(error => of(CheckoutActions.CHECKOUT_FAILURE({error: error})))
    )
  )

  reloadBasket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CheckoutActions.CHECKOUT_SUCCESS),
      map((action) => BasketActions.LOAD_INIT()),
    )
  )

  reloadWallet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CheckoutActions.CHECKOUT_SUCCESS),
      map((action) => WalletActions.LOAD_INIT()),
    )
  )

}
