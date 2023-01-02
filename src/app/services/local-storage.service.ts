import {Injectable, Inject} from '@angular/core';
import {environment} from '../../environments/environment';
import {INITIAL_APP_CONFIG} from '../mock-data/app-config';
import {INITIAL_BASKET} from '../mock-data/basket';
import {INITIAL_ORDERS} from '../mock-data/orders';
import {INITIAL_PRODUCTS} from '../mock-data/products';
import {INITIAL_WALLET} from '../mock-data/wallet';
import {AppConfigSerialized} from '../models/serialized/app-config-serialized';
import {BasketSerialized} from '../models/serialized/basket-serialized';
import {OrderSerialized} from '../models/serialized/order-serialized';
import {ProductSerialized} from '../models/serialized/product-serialized';
import {WalletSerialized} from '../models/serialized/wallet-serialized';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly productsKey = environment.localStorageKeys.products;
  private readonly basketKey = environment.localStorageKeys.basket;
  private readonly walletKey = environment.localStorageKeys.wallet;
  private readonly ordersKey = environment.localStorageKeys.orders;
  private readonly appConfigKey = environment.localStorageKeys.appConfig;

  constructor(
    @Inject(INITIAL_BASKET) private readonly BASKET: BasketSerialized,
    @Inject(INITIAL_PRODUCTS) private readonly PRODUCTS: ProductSerialized[],
    @Inject(INITIAL_WALLET) private readonly WALLET: WalletSerialized[],
    @Inject(INITIAL_ORDERS) private readonly ORDERS: OrderSerialized[],
    @Inject(INITIAL_APP_CONFIG) private readonly APP_CONFIG: AppConfigSerialized,
  ) {
    // set default values
    if (!localStorage.getItem(this.productsKey)) {
      localStorage.setItem(this.productsKey, JSON.stringify(this.PRODUCTS));
    }
    if (!localStorage.getItem(this.basketKey)) {
      localStorage.setItem(this.basketKey, JSON.stringify(this.BASKET));
    }
    if (!localStorage.getItem(this.walletKey)) {
      localStorage.setItem(this.walletKey, JSON.stringify(this.WALLET));
    }
    if (!localStorage.getItem(this.ordersKey)) {
      localStorage.setItem(this.ordersKey, JSON.stringify(this.ORDERS));
    }
    if (!localStorage.getItem(this.appConfigKey)) {
      localStorage.setItem(this.appConfigKey, JSON.stringify(this.APP_CONFIG));
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

  getOrders(): OrderSerialized[] {
    return JSON.parse(localStorage.getItem(this.ordersKey)!);
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

  setOrders(orders: OrderSerialized[]) {
    localStorage.setItem(this.ordersKey, JSON.stringify(orders));
  }

  setAppConfig(appConfigSerialized: AppConfigSerialized) {
    localStorage.setItem(this.appConfigKey, JSON.stringify(appConfigSerialized));
  }

}
