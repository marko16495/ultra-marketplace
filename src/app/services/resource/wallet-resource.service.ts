import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';
import {WalletSerialized} from '../../models/serialized/wallet-serialized';
import {randomDelay} from '../../operators/random-delay.operator';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WalletResourceService {

  constructor(private readonly localStorageService: LocalStorageService) { }

  getWallet(): Observable<WalletSerialized> {
    return of(this.localStorageService.getWallet())
      .pipe(randomDelay(10, 100))
  }

}