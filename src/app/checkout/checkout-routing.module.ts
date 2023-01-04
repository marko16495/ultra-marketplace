import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CheckoutGuard} from './checkout-guard';
import {CheckoutComponent} from './checkout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutComponent,
        canActivate: [CheckoutGuard]
      }
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class CheckoutRoutingModule {
}
