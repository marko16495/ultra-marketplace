import {AppState} from '../models/app-state';

export const CheckoutSelectors = {
  inProgress: (state: AppState) => state.checkout.inProgress,
}
