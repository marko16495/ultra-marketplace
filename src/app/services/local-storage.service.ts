import {Injectable, Inject} from '@angular/core';
import {environment} from '../../environments/environment';
import {INITIAL_BASKET} from '../mock-data/basket';
import {INITIAL_ORDERS} from '../mock-data/orders';
import {INITIAL_PRODUCTS} from '../mock-data/products';
import {INITIAL_WALLET} from '../mock-data/wallet';
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

  constructor(
    @Inject(INITIAL_BASKET) private readonly BASKET: BasketSerialized,
    @Inject(INITIAL_PRODUCTS) private readonly PRODUCTS: ProductSerialized[],
    @Inject(INITIAL_WALLET) private readonly WALLET: WalletSerialized[],
    @Inject(INITIAL_ORDERS) private readonly ORDERS: OrderSerialized[],
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

}
