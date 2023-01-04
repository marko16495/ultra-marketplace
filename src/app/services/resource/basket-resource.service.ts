import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, tap, map, throwError} from 'rxjs';
import {BasketSerialized} from '../../models/serialized/basket-serialized';
import {randomDelay} from '../../shared/operators/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BasketResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  getBasket(): Observable<BasketSerialized> {
    return of(this.localStorageService.getBasket()).pipe(randomDelay(300, 400));
  }

  addProduct(productId: number): Observable<BasketSerialized> {
    const product = this.localStorageService.getProducts().find(p => p.id === productId);
    const basket = this.localStorageService.getBasket();
    if (basket.products.findIndex(p => p.id === productId) !== -1) {
      return throwError(new HttpErrorResponse({
        error: `Product with id ${productId} already in basket!`
      }))
    }
    return of(null)
      .pipe(
        randomDelay(200, 300),
        tap(() => {
          this.localStorageService.setBasket({
            products: [
              ...basket.products,
              product!
            ]
          })
        }),
        map(() => this.localStorageService.getBasket())
      )
  }

  removeProduct(productId: number): Observable<BasketSerialized> {
    const basket = this.localStorageService.getBasket();
    if (basket.products.findIndex(p => p.id === productId) === -1) {
      return throwError(new HttpErrorResponse({
        error: `Product with id ${productId} not in basket!`
      }))
    }
    return of(null)
      .pipe(
        randomDelay(100, 200),
        tap(() => {
          this.localStorageService.setBasket({
            products: basket.products
              .filter(p => p.id !== productId)
          })
        }),
        map(() => this.localStorageService.getBasket())
      )
  }

}
