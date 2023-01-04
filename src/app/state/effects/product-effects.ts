import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {switchMap, map, catchError, of, withLatestFrom, filter, takeUntil} from 'rxjs';
import {ProductDataService} from '../../services/data/product-data.service';
import {ProductActions} from '../actions/products-actions';
import {AppState} from '../models/app-state';
import {ProductSelectors} from '../selectors/product-selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly productDataService: ProductDataService,
  ) { }

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_INIT),
      switchMap((action) => this.productDataService.getProducts(action.request).pipe(
        takeUntil(this.actions$.pipe(ofType(ProductActions.CLEAR)))
      )),
      map(products => ProductActions.LOAD_SUCCESS({products: products})),
      catchError(error => of(ProductActions.LOAD_FAILURE({error: error})))
    )
  )

  loadMore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LOAD_MORE),
      withLatestFrom(
        this.store.select(ProductSelectors.request),
        this.store.select(ProductSelectors.hasMore)
      ),
      filter(([,, hasMore]) => hasMore),
      map(([, request]) => {
        return ProductActions.LOAD_INIT({
          request: {
            pageIndex: request!.pageIndex + 1,
            pageSize: request!.pageSize
          }
        })
      })
    )
  )

}
