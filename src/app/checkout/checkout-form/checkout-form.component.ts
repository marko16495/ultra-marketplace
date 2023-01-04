import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CheckoutRequest} from '../../models/public/checkout-request';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutFormComponent {

  @Input() totalPrice?: number | null;
  @Input() currency?: string | null;

  @Output() checkout = new EventEmitter<CheckoutRequest>();

  form = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    street: new FormControl<string>('', Validators.required),
    city: new FormControl<string>('', Validators.required),
    state: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    this.checkout.emit({...this.form.value} as CheckoutRequest);
  }

}
