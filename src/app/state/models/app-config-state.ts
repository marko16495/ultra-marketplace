import {AppConfig} from '../../models/public/app-config';

export interface AppConfigState {
  appConfig?: AppConfig;
  loading: boolean;
  error?: string;
}
