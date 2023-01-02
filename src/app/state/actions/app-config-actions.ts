import {createAction, props} from '@ngrx/store';
import {AppConfig} from '../../models/app-config';

export const AppConfigActions = {
  LOAD_INIT: createAction(
    '[App config] Load init',
  ),
  LOAD_SUCCESS: createAction(
    '[App config] Load success',
    props<{ appConfig: AppConfig }>()
  ),
  LOAD_FAILURE: createAction(
    '[App config] Load failure',
    props<{ error: any }>()
  ),
}
