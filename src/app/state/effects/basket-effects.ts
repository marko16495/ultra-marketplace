import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, of} from 'rxjs';
import {BasketActions} from '../actions/basket-actions';
import {BasketDataService} from '../../services/data/basket-data.service';

@Injectable({
  providedIn: 'root'
})
export class BasketEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly basketDataService: BasketDataService,
  ) { }

  loadBasket = createEffect(() =>
    this.actions$.pipe(
      ofType(BasketActions.LOAD_INIT),
      switchMap(() => this.basketDataService.getBasket()),
      map(basket => BasketActions.LOAD_SUCCESS({basket: basket})),
      catchError(error => of(BasketActions.LOAD_FAILURE({error: error})))
    )
  )

  addToBasket = createEffect(() =>
    this.actions$.pipe(
      ofType(BasketActions.ADD_PRODUCT_INIT),
      switchMap((action) => this.basketDataService.addProduct(action.productId)
        .pipe(
          map(basket => BasketActions.ADD_PRODUCT_SUCCESS({
            basket: basket,
            productId: action.productId
          })),
          catchError((error: HttpErrorResponse) => of(BasketActions.ADD_PRODUCT_FAILURE({
            error: error.error,
            productId: action.productId
          })))
        )
      )
    )
  )

  removeFromBasket = createEffect(() =>
    this.actions$.pipe(
      ofType(BasketActions.REMOVE_PRODUCT_INIT),
      switchMap((action) => this.basketDataService.removeProduct(action.productId)
        .pipe(
          map(basket => BasketActions.REMOVE_PRODUCT_SUCCESS({
            basket: basket,
            productId: action.productId
          })),
          catchError((error: HttpErrorResponse) => of(BasketActions.REMOVE_PRODUCT_FAILURE({
            error: error.error,
            productId: action.productId
          })))
        )
      )
    )
  )

}
