import {InjectionToken} from '@angular/core';
import {WalletSerialized} from '../models/serialized/wallet-serialized';

export const INITIAL_WALLET = new InjectionToken<WalletSerialized>('INITIAL_WALLET', {
  providedIn: 'root',
  factory: () => ({
    balance: 1000
  })
})
