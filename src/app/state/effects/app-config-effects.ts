import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, of} from 'rxjs';
import {AppConfigDataService} from '../../services/data/app-config-data.service';
import {AppConfigActions} from '../actions/app-config-actions';

@Injectable({
  providedIn: 'root'
})
export class AppConfigEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly appConfigDataService: AppConfigDataService,
  ) { }

  loadAppConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppConfigActions.LOAD_INIT),
      switchMap(() => this.appConfigDataService.getAppConfig()),
      map(appConfig => AppConfigActions.LOAD_SUCCESS({appConfig: appConfig})),
      catchError(error => of(AppConfigActions.LOAD_FAILURE({error: error})))
    )
  )

}
