import {createReducer, on} from '@ngrx/store';
import {AppConfigActions} from '../actions/app-config-actions';
import {AppConfigState} from '../models/app-config-state';

const initialState: AppConfigState = {
  loading: false
}

export const appConfigReducer = createReducer(
  initialState,
  on(AppConfigActions.LOAD_INIT, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(AppConfigActions.LOAD_SUCCESS, (state, args) => {
    return {
      appConfig: args.appConfig,
      loading: false
    }
  }),
  on(AppConfigActions.LOAD_FAILURE, (state, args) => {
    return {
      loading: false,
      error: args.error
    }
  })
)
