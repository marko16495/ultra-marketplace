import {Wallet} from '../../models/wallet';

export interface WalletState {
  wallet?: Wallet;
  loading: boolean;
  error?: string;
}
