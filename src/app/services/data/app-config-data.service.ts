import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {AppConfig} from '../../models/app-config';
import {deserializeAppConfig} from '../../models/mappers/deserialize-app-config';
import {AppConfigResourceService} from '../resource/app-config-resource.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigDataService {

  constructor(private readonly appConfigResourceService: AppConfigResourceService) { }

  getAppConfig(): Observable<AppConfig> {
    return this.appConfigResourceService.getAppConfig()
      .pipe(map(deserializeAppConfig))
  }

}
