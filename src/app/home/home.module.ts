import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {LayoutModule} from '../layout/layout.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ProductComponent} from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    LayoutModule,
  ],
  declarations: [
    HomeComponent,
    ProductComponent
  ]
})
export class HomeModule { }
