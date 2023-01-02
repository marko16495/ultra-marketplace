import {AppConfigState} from './app-config-state';
import {BasketState} from './basket-state';
import {ProductsState} from './products-state';
import {WalletState} from './wallet-state';

export interface AppState {
  appConfig: AppConfigState;
  products: ProductsState;
  basket: BasketState;
  wallet: WalletState;
}
