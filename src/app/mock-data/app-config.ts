import {InjectionToken} from '@angular/core';
import {AppConfigSerialized} from '../models/serialized/app-config-serialized';

export const INITIAL_APP_CONFIG = new InjectionToken<AppConfigSerialized>('INITIAL_APP_CONFIG', {
  providedIn: 'root',
  factory: () => ({
    currency: 'USD',
  })
})
