import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {LayoutModule} from '../layout/layout.module';
import {BasketRoutingModule} from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BasketProductComponent } from './basket-product/basket-product.component';

@NgModule({
  imports: [
    CommonModule,
    BasketRoutingModule,
    TranslateModule,
    LayoutModule,
  ],
  declarations: [
    BasketComponent,
    BasketProductComponent
  ]
})
export class BasketModule { }
