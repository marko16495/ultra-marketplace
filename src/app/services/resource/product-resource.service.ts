import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GetProductsRequest} from '../../models/get-products-request';
import {ProductsSerialized} from '../../models/serialized/products-serialized';
import {randomDelay} from '../../operators/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  getProducts(request: GetProductsRequest): Observable<ProductsSerialized> {
    const startIndex = request.pageIndex * request.pageSize;
    const endIndex = startIndex + request.pageSize;
    let filteredProducts = this.localStorageService.getProducts();
    if (request.filter) {
      filteredProducts = filteredProducts
        .filter(p => p.name.toLowerCase().includes(request.filter!.toLowerCase()))
    }
    const data = filteredProducts.slice(startIndex, endIndex);
    return of({
      data: data,
      totalElements: filteredProducts.length
    }).pipe(randomDelay(200, 400));
  }

}
