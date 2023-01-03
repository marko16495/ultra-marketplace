import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {LayoutModule} from '../layout/layout.module';
import {LoaderModule} from '../shared/loader/loader.module';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout.component';
import {CheckoutFormComponent} from './checkout-form/checkout-form.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    TranslateModule,
    LayoutModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
  declarations: [
    CheckoutComponent,
    CheckoutFormComponent,
  ]
})
export class CheckoutModule {
}
