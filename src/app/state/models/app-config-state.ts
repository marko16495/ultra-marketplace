import {AppConfig} from '../../models/app-config';

export interface AppConfigState {
  appConfig?: AppConfig;
  loading: boolean;
  error?: string;
}
