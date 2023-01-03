import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() walletBalance?: number | null;
  @Input() basketProductsCount?: number | null;
  @Input() currency?: string | null;

}
