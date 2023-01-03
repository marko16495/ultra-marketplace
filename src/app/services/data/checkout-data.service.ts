import {HttpStatusCode} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {CheckoutRequest} from '../../models/public/checkout-request';
import {serializeCheckoutRequest} from '../../models/mappers/serialize-checkout-request';
import {CheckoutResourceService} from '../resource/checkout-resource.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutDataService {

  constructor(private readonly checkoutResourceService: CheckoutResourceService) { }

  checkout(checkoutRequest: CheckoutRequest): Observable<boolean> {
    return this.checkoutResourceService.checkout(serializeCheckoutRequest(checkoutRequest))
      .pipe(map(response => response.status === HttpStatusCode.Ok))
  }

}
