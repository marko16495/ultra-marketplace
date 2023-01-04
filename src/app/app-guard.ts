import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, filter, take} from 'rxjs';
import {AppState} from './state/models/app-state';
import {AppSelectors} from './state/selectors/app-selectors';

/**
 * This Guard is used to make sure all necessary data is loaded.
 *
 * Child routes Guards depend on this data, like {@link CheckoutGuard}
 *
 */
@Injectable({providedIn: 'root'})
export class AppGuard implements CanActivate {

  constructor(private readonly store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.select(AppSelectors.ready)
      .pipe(
        filter(ready => ready),
        take(1)
      )
  }

}
