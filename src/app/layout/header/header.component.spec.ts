import {Component} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from './header.component';

@Component({
  template: `
    <app-header
      [walletBalance]="walletBalance"
      [basketProductsCount]="basketProductsCount"
      [currency]="currency">
    </app-header>
  `
})
class HeaderTestComponent {
  walletBalance?: number;
  basketProductsCount?: number;
  currency?: string;
}

describe('HeaderComponent', () => {

  let component: HeaderTestComponent;
  let fixture: ComponentFixture<HeaderTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTestComponent, HeaderComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display wallet balance', () => {
    component.walletBalance = 1050;
    component.basketProductsCount = 0;
    component.currency = 'USD';
    fixture.detectChanges();
    const de = fixture.debugElement;
    const balance = de.nativeElement.querySelector('[data-test="app-header-balance"]') as HTMLElement;
    expect(balance.innerHTML).toContain('$1,050');
  });

  it('should display number of products in basket', () => {
    component.walletBalance = 1000;
    component.basketProductsCount = 3;
    component.currency = 'USD';
    fixture.detectChanges();
    const de = fixture.debugElement;
    const basket = de.nativeElement.querySelector('[data-test="app-header-basket"]') as HTMLButtonElement;
    expect(basket.innerHTML).toContain('(3)');
  });


})
