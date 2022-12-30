import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, of} from 'rxjs';
import {ProductActions} from '../actions/products-actions';
import {ProductDataService} from '../../services/data/product-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly productDataService: ProductDataService,
  ) { }

  loadProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_INIT),
      switchMap((action) => this.productDataService.getProducts(action.request)),
      map(products => ProductActions.LOAD_SUCCESS({products: products})),
      catchError(error => of(ProductActions.LOAD_FAILURE({error: error})))
    )
  )

}
