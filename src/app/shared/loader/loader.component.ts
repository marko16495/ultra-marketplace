import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  @Input() opacity: 0 | 25 | 50 | 75 | 100 = 50;
}
