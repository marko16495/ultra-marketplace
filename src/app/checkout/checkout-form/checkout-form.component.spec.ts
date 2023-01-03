import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {CheckoutFormComponent} from './checkout-form.component';

@Component({
  template: `
    <app-checkout-form
      *ngIf="totalPrice && currency"
      [totalPrice]="totalPrice"
      [currency]="currency">
    </app-checkout-form>
  `
})
class CheckoutFormTestComponent {
  totalPrice?: number;
  currency?: string;
}

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormTestComponent;
  let fixture: ComponentFixture<CheckoutFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFormComponent, CheckoutFormTestComponent ],
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('submit button should be disabled initially', async () => {
    component.currency = 'USD';
    component.totalPrice = 100;
    fixture.detectChanges();
    const de = fixture.debugElement;
    const submitBtn = de.nativeElement.querySelector('.btn-primary') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
  });

  it('should display total price', async () => {
    component.currency = 'USD';
    component.totalPrice = 199;
    fixture.detectChanges();
    const de = fixture.debugElement;
    const totalPriceElement = de.nativeElement.querySelector('[data-test="total-price"]') as HTMLElement;
    expect(totalPriceElement.innerHTML).toContain('$199');
  });

  it('submit button should be enabled when form is valid', async () => {
    component.currency = 'USD';
    component.totalPrice = 100;
    fixture.detectChanges();
    const de = fixture.debugElement;
    setInputValue(de.nativeElement, 'firstName', 'Marko');
    setInputValue(de.nativeElement, 'lastName', 'Vujovic');
    setInputValue(de.nativeElement, 'street', 'Kralja Nikole');
    setInputValue(de.nativeElement, 'city', 'Podgorica');
    setInputValue(de.nativeElement, 'state', 'Montenegro');
    setInputValue(de.nativeElement, 'email', 'markovujovic1604@gmail.com');
    fixture.detectChanges();

    const submitBtn = de.nativeElement.querySelector('.btn-primary') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(false);
  });

  it('submit button should be disabled when form is invalid', async () => {
    component.currency = 'USD';
    component.totalPrice = 100;
    fixture.detectChanges();
    const de = fixture.debugElement;
    setInputValue(de.nativeElement, 'firstName', 'Marko');
    setInputValue(de.nativeElement, 'lastName', 'Vujovic');
    setInputValue(de.nativeElement, 'street', 'Kralja Nikole');
    setInputValue(de.nativeElement, 'city', 'Podgorica');
    setInputValue(de.nativeElement, 'state', 'Montenegro');
    setInputValue(de.nativeElement, 'email', 'markovujovic1604@gmail.com.'); // invalid
    fixture.detectChanges();

    const submitBtn = de.nativeElement.querySelector('.btn-primary') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
  });
});

function setInputValue(component: HTMLElement, inputId: string, value: string) {
  const input = component.querySelector(`#${inputId}`) as HTMLInputElement;
  input.value = value;
  input.dispatchEvent(new Event('input'));
}
