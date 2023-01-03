import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {Basket} from '../../models/public/basket';
import {deserializeBasket} from '../../models/mappers/deserialize-basket';
import {BasketResourceService} from '../resource/basket-resource.service';

@Injectable({
  providedIn: 'root'
})
export class BasketDataService {

  constructor(private readonly basketResourceService: BasketResourceService) { }

  getBasket(): Observable<Basket> {
    return this.basketResourceService.getBasket()
      .pipe(map(deserializeBasket))
  }

  addProduct(productId: number): Observable<Basket> {
    return this.basketResourceService.addProduct(productId)
      .pipe(map(deserializeBasket))
  }

  removeProduct(productId: number): Observable<Basket> {
    return this.basketResourceService.removeProduct(productId)
      .pipe(map(deserializeBasket))
  }

}
