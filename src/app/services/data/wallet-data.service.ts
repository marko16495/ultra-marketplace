import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {Wallet} from '../../models/wallet';
import {deserializeWallet} from '../../models/mappers/deserialize-wallet';
import {WalletResourceService} from '../resource/wallet-resource.service';

@Injectable({
  providedIn: 'root'
})
export class WalletDataService {

  constructor(private readonly walletResourceService: WalletResourceService) { }

  geWallet(): Observable<Wallet> {
    return this.walletResourceService.getWallet()
      .pipe(map(deserializeWallet))
  }

}
