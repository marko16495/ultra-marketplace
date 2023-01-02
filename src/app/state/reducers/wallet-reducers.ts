import {createReducer, on} from '@ngrx/store';
import {WalletActions} from '../actions/wallet-actions';
import {WalletState} from '../models/wallet-state';

const initialState: WalletState = {
  loading: false
}

export const walletReducer = createReducer(
  initialState,
  on(WalletActions.LOAD_INIT, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(WalletActions.LOAD_SUCCESS, (state, args) => {
    return {
      wallet: args.wallet,
      loading: false
    }
  }),
  on(WalletActions.LOAD_FAILURE, (state, args) => {
    return {
      loading: false,
      error: args.error
    }
  })
)
