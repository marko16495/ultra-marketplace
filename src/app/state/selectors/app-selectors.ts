import {AppState} from '../models/app-state';

export const AppSelectors = {
  /**
   * Checks if necessary data for application to render is loaded
   */
  ready: (state: AppState) => {
    return !!state.appConfig.appConfig && !!state.wallet.wallet && !!state.basket.products
  }
}
