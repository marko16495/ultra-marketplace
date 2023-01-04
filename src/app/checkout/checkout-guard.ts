import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, combineLatest, map} from 'rxjs';
import {AppState} from '../state/models/app-state';
import {BasketSelectors} from '../state/selectors/basket-selectors';

@Injectable({providedIn: 'root'})
export class CheckoutGuard implements CanActivate {

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) { }

  canActivate(): Observable<boolean | UrlTree> {
    return combineLatest([
      this.store.select(BasketSelectors.basketEmpty),
      this.store.select(BasketSelectors.balanceSufficient),
    ]).pipe(
      map(([basketEmpty, balanceSufficient]) => !basketEmpty && balanceSufficient),
      map(canActivate => {
        if (!canActivate) {
          return this.router.parseUrl('/basket');
        }
        return true;
      })
    );
  }

}
