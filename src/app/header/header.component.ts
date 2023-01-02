import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() walletBalance?: number | null;
  @Input() basketProducts?: Product[] | null = [];
  @Input() currency?: string;

}
