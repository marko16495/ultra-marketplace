import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {INITIAL_APP_CONFIG} from '../mock-data/app-config';
import {INITIAL_BASKET} from '../mock-data/basket';
import {INITIAL_PRODUCTS} from '../mock-data/products';
import {INITIAL_WALLET} from '../mock-data/wallet';
import {AppConfigSerialized} from '../models/serialized/app-config-serialized';
import {BasketSerialized} from '../models/serialized/basket-serialized';
import {ProductSerialized} from '../models/serialized/product-serialized';
import {WalletSerialized} from '../models/serialized/wallet-serialized';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly productsKey = environment.localStorageKeys.products;
  private readonly basketKey = environment.localStorageKeys.basket;
  private readonly walletKey = environment.localStorageKeys.wallet;
  private readonly appConfigKey = environment.localStorageKeys.appConfig;

  constructor( ) {
    // set default values
    if (!localStorage.getItem(this.productsKey)) {
      localStorage.setItem(this.productsKey, JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem(this.basketKey)) {
      localStorage.setItem(this.basketKey, JSON.stringify(INITIAL_BASKET));
    }
    if (!localStorage.getItem(this.walletKey)) {
      localStorage.setItem(this.walletKey, JSON.stringify(INITIAL_WALLET));
    }
    if (!localStorage.getItem(this.appConfigKey)) {
      localStorage.setItem(this.appConfigKey, JSON.stringify(INITIAL_APP_CONFIG));
    }
  }

  getProducts(): ProductSerialized[] {
    return JSON.parse(localStorage.getItem(this.productsKey)!);
  }

  getBasket(): BasketSerialized {
    return JSON.parse(localStorage.getItem(this.basketKey)!);
  }

  getWallet(): WalletSerialized {
    return JSON.parse(localStorage.getItem(this.walletKey)!);
  }

  getAppConfig(): AppConfigSerialized {
    return JSON.parse(localStorage.getItem(this.appConfigKey)!);
  }

  // --------------------------------------------------------------

  setProducts(products: ProductSerialized[]) {
    localStorage.setItem(this.productsKey, JSON.stringify(products));
  }

  setBasket(basket: BasketSerialized) {
    localStorage.setItem(this.basketKey, JSON.stringify(basket));
  }

  setWallet(wallet: WalletSerialized) {
    localStorage.setItem(this.walletKey, JSON.stringify(wallet));
  }

  setAppConfig(appConfigSerialized: AppConfigSerialized) {
    localStorage.setItem(this.appConfigKey, JSON.stringify(appConfigSerialized));
  }

}
