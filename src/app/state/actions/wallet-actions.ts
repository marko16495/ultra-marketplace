import {createAction, props} from '@ngrx/store';
import {Wallet} from '../../models/wallet';

export const WalletActions = {
  LOAD_INIT: createAction(
    '[Wallet] Load init',
  ),
  LOAD_SUCCESS: createAction(
    '[Wallet] Load success',
    props<{ wallet: Wallet }>()
  ),
  LOAD_FAILURE: createAction(
    '[Wallet] Load failure',
    props<{ error: any }>()
  ),
}
