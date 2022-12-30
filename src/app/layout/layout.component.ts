import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Product} from '../models/product';
import {Wallet} from '../models/wallet';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  @Input() wallet?: Wallet | null;
  @Input() basketProducts?: Product[] | null = [];

}
