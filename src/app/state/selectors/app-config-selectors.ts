import {AppState} from '../models/app-state';

export const AppConfigSelectors = {
  appConfig: (state: AppState) => state.appConfig.appConfig,
  currency: (state: AppState) => state.appConfig.appConfig?.currency,
}
