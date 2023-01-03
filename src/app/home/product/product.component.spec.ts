import {Component} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {ProductWithBasketInfo} from '../../models/public/product-with-basket-info';
import {ProductComponent} from './product.component';

// Wrapper component is required in order to test component with ChangeDetectionStrategy.OnPush
@Component({
  template: `
    <app-product
      *ngIf="productWithBasketInfo && currency"
      [productWithBasketInfo]="productWithBasketInfo"
      [currency]="currency">
    </app-product>
  `
})
class ProductTestComponent {
  productWithBasketInfo?: ProductWithBasketInfo;
  currency?: string;
}

describe('ProductComponent', () => {

  let component: ProductTestComponent;
  let fixture: ComponentFixture<ProductTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTestComponent, ProductComponent],
      // We are NOT testing translations
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display product name', () => {
    component.currency = 'USD';
    component.productWithBasketInfo = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      inBasket: false,
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const nameElement = de.nativeElement.querySelector('[data-test="app-product-name"]') as HTMLElement;
    expect(nameElement.innerHTML).toContain('Test product');
  });

  it('should display product price', () => {
    component.currency = 'USD';
    component.productWithBasketInfo = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      inBasket: false,
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const priceElement = de.nativeElement.querySelector('[data-test="app-product-price"]') as HTMLElement;
    expect(priceElement.innerHTML).toContain('$100');
  });

  it('should render product image', () => {
    component.currency = 'USD';
    component.productWithBasketInfo = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100,
        img: 'https://i.imgur.com/hk1E372.jpg'
      },
      inBasket: false,
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const imageElement = de.nativeElement.querySelector('img') as HTMLImageElement;
    expect(imageElement.src).toContain('https://i.imgur.com/hk1E372.jpg');
  });

  it('should display "Add to basket" button', () => {
    component.currency = 'USD';
    component.productWithBasketInfo = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      inBasket: false,
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const buttonElement = de.nativeElement.querySelector('[data-test="app-product-add-to-basket-button"]') as HTMLButtonElement;
    expect(buttonElement).toBeTruthy();
  });

  it('should display "Remove from basket" button', () => {
    component.currency = 'USD';
    component.productWithBasketInfo = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      inBasket: true,
      dirty: false,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const buttonElement = de.nativeElement.querySelector('[data-test="app-product-remove-from-basket-button"]') as HTMLButtonElement;
    expect(buttonElement).toBeTruthy();
  });

  it('should show spinner', () => {
    component.currency = 'USD';
    component.productWithBasketInfo = {
      product: {
        id: 1,
        name: 'Test product',
        price: 100
      },
      inBasket: false,
      dirty: true,
    }
    fixture.detectChanges();
    const de = fixture.debugElement;
    const spinner = de.nativeElement.querySelector('[role="status"]') as HTMLElement;
    expect(spinner).toBeTruthy();
  });

})
