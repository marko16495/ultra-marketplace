import {HttpResponse, HttpStatusCode} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';
import {CheckoutRequestSerialized} from '../../models/serialized/checkout-request-serialized';
import {randomDelay} from '../../shared/utils/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  checkout(request: CheckoutRequestSerialized): Observable<HttpResponse<void>> {
    const basket = this.localStorageService.getBasket();
    const wallet = this.localStorageService.getWallet();
    const totalPrice = basket.products.reduce((acc, p) => acc + p.price, 0);
    // remove products from marketplace
    const products = this.localStorageService.getProducts()
      .filter(product => !basket.products.some(p => p.id === product.id));
    this.localStorageService.setProducts(products);
    // reduce wallet balance
    this.localStorageService.setWallet({
      balance: wallet.balance - totalPrice
    })
    // empty basket
    this.localStorageService.setBasket({
      products: []
    });
    // create response
    const response = new HttpResponse({
      body: undefined,
      status: HttpStatusCode.Ok
    })
    return of(response)
      .pipe(randomDelay(1500, 2000))
  }

}
