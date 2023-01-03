import {Wallet} from '../public/wallet';
import {WalletSerialized} from '../serialized/wallet-serialized';

export function deserializeWallet(serialized: WalletSerialized): Wallet {
  return {
    balance: serialized.balance
  }
}
