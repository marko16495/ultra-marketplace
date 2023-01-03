import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';
import {AppConfigSerialized} from '../../models/serialized/app-config-serialized';
import {randomDelay} from '../../shared/operators/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  getAppConfig(): Observable<AppConfigSerialized> {
    return of(this.localStorageService.getAppConfig())
      .pipe(randomDelay(200, 300))
  }

}
