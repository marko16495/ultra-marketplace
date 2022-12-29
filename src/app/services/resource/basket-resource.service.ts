import {Injectable} from '@angular/core';
import {Observable, of, tap, map} from 'rxjs';
import {BasketSerialized} from '../../models/serialized/basket-serialized';
import {randomDelay} from '../../operators/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BasketResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  getBasket(): Observable<BasketSerialized> {
    return of(this.localStorageService.getBasket()).pipe(randomDelay(10, 100));
  }

  addProduct(productId: number): Observable<BasketSerialized> {
    const product = this.localStorageService.getProducts().find(p => p.id === productId);
    return of(null)
      .pipe(
        randomDelay(10, 100),
        tap(() => {
          this.localStorageService.setBasket({
            products: [
              ...this.localStorageService.getBasket().products,
              product!
            ]
          })
        }),
        map(() => this.localStorageService.getBasket())
      )
  }

  removeProduct(productId: number): Observable<BasketSerialized> {
    return of(null)
      .pipe(
        randomDelay(10, 100),
        tap(() => {
          this.localStorageService.setBasket({
            products: this.localStorageService.getBasket().products
              .filter(p => p.id === productId)
          })
        }),
        map(() => this.localStorageService.getBasket())
      )
  }

}
