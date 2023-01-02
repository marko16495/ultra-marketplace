import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ProductComponent} from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
  ],
  declarations: [
    HomeComponent,
    ProductComponent
  ]
})
export class HomeModule { }
