import {AppState} from '../models/app-state';

export const WalletSelectors = {
  balance: (state: AppState) => state.wallet.wallet!.balance,
  loading: (state: AppState) => state.wallet.loading,
}
