import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketProductComponent {

  @Input() product!: {
    product: Product;
    dirty: boolean;
  };

  @Input() currency!: string;

  @Output() removeFromBasket = new EventEmitter<Product>();

}
