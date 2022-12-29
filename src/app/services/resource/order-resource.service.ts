import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GetOrdersRequest} from '../../models/get-orders-request';
import {OrdersSerialized} from '../../models/serialized/orders-serialized';
import {randomDelay} from '../../operators/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  getOrders(request: GetOrdersRequest): Observable<OrdersSerialized> {
    const startIndex = request.pageIndex * request.pageSize;
    const endIndex = startIndex + request.pageSize;
    const data = this.localStorageService.getOrders().slice(startIndex, endIndex);
    return of({
      data: data,
      totalElements: data.length
    }).pipe(randomDelay(10, 100));
  }

}
