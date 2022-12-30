import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Product} from '../models/product';
import {Wallet} from '../models/wallet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() wallet?: Wallet | null;
  @Input() basketProducts?: Product[] | null = [];

}
