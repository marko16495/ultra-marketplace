import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, of} from 'rxjs';
import {WalletDataService} from '../../services/data/wallet-data.service';
import {WalletActions} from '../actions/wallet-actions';

@Injectable({
  providedIn: 'root'
})
export class WalletEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly walletDataService: WalletDataService,
  ) { }

  loadWallet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WalletActions.LOAD_INIT),
      switchMap(() => this.walletDataService.geWallet()),
      map(wallet => WalletActions.LOAD_SUCCESS({wallet: wallet})),
      catchError(error => of(WalletActions.LOAD_FAILURE({error: error})))
    )
  )

}
