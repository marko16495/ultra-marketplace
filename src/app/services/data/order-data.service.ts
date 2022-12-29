import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {GetProductsRequest} from '../../models/get-products-request';
import {deserializeOrders} from '../../models/mappers/deserialize-orders';
import {Orders} from '../../models/orders';
import {OrderResourceService} from '../resource/order-resource.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(private readonly orderResourceService: OrderResourceService) { }

  getOrders(request: GetProductsRequest): Observable<Orders> {
    return this.orderResourceService.getOrders(request)
      .pipe(map(deserializeOrders))
  }

}
