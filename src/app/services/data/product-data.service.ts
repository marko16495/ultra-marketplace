import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Products} from '../../models/public/products';
import {deserializeProducts} from '../../models/mappers/deserialize-products';
import {GetProductsRequest} from '../../models/public/get-products-request';
import {ProductResourceService} from '../resource/product-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private readonly productResourceService: ProductResourceService) { }

  getProducts(request: GetProductsRequest): Observable<Products> {
    return this.productResourceService.getProducts(request)
      .pipe(map(deserializeProducts))
  }

}
