import {AppConfig} from '../app-config';
import {AppConfigSerialized} from '../serialized/app-config-serialized';

export function deserializeAppConfig(serialized: AppConfigSerialized): AppConfig {
  return {
    currency: serialized.currency,
  }
}
