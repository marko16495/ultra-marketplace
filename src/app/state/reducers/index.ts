import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {AppState} from '../models/app-state';
import {appConfigReducer} from './app-config-reducers';
import {basketReducer} from './basket-reducers';
import {productReducer} from './product-reducers';
import {walletReducer} from './wallet-reducers';

export const reducers: ActionReducerMap<AppState> = {
  appConfig: appConfigReducer,
  products: productReducer,
  basket: basketReducer,
  wallet: walletReducer,
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
