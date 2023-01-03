import {Wallet} from '../../models/public/wallet';

export interface WalletState {
  wallet?: Wallet;
  loading: boolean;
  error?: string;
}
