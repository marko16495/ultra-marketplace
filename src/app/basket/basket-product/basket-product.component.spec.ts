import {Component} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {Product} from '../../models/public/product';
import {BasketProductComponent} from './basket-product.component';

// Wrapper component is required in order to test component with ChangeDetectionStrategy.OnPush
@Component({
  template: `
    <app-basket-product
      *ngIf="product && currency"
      [product]="product"
      [currency]="currency">
    </app-basket-product>
  `
})
class BasketProductTestComponent {
  product?: {
    product: Product;
    dirty: boolean;
  };
  currency?: string;
}

describe('BasketProductComponent', () => {

  let component: BasketProductTestComponent;
  let fixture: ComponentFixture<BasketProductTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BasketProductTestComponent, BasketProductComponent],
      // We are NOT testing translations
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketProductTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display product name', () => {
    component.currency = 'USD';
    component.product = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const nameElement = de.nativeElement.querySelector('[data-test="basket-product-name"]') as HTMLElement;
    expect(nameElement.innerHTML).toContain('Test product');
  });

  it('should display product price', () => {
    component.currency = 'USD';
    component.product = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const priceElement = de.nativeElement.querySelector('[data-test="basket-product-price"]') as HTMLElement;
    expect(priceElement.innerHTML).toContain('$100');
  });

  it('should render product image', () => {
    component.currency = 'USD';
    component.product = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100,
        img: 'https://i.imgur.com/hk1E372.jpg'
      },
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const imageElement = de.nativeElement.querySelector('img') as HTMLImageElement;
    expect(imageElement.src).toContain('https://i.imgur.com/hk1E372.jpg');
  });

  it('should display remove product button', () => {
    component.currency = 'USD';
    component.product = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const buttonElement = de.nativeElement.querySelector('[data-test="remove-from-basket-button"]') as HTMLButtonElement;
    expect(buttonElement).toBeTruthy();
  });

})
