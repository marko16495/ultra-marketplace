import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {ProductWithBasketInfo} from '../../models/public/product-with-basket-info';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() productWithBasketInfo!: ProductWithBasketInfo;
  @Input() currency!: string;

  @Output() addToBasket = new EventEmitter<ProductWithBasketInfo>();
  @Output() removeFromBasket = new EventEmitter<ProductWithBasketInfo>();

}
