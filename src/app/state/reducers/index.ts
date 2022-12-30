import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {AppState} from '../models/app-state';
import {basketReducer} from './basket-reducers';
import {productReducer} from './product-reducers';

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
  basket: basketReducer,
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
