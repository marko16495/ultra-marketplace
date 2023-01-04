import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from '../layout/header/header.component';
import {LayoutComponent} from '../layout/layout.component';
import {AppState} from '../state/models/app-state';
import {BasketProductComponent} from './basket-product/basket-product.component';
import {BasketComponent} from './basket.component';


describe('BasketComponent', () => {

  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  let store: MockStore<AppState>;

  const defaultState: AppState = {
    appConfig: {
      appConfig: {
        currency: 'USD'
      },
      loading: false
    },
    products: {
      products: [],
      totalElements: 0,
      loading: false
    },
    wallet: {
      wallet: {
        balance: 1000
      },
      loading: false
    },
    basket: {
      products: [],
      loading: false,
      dirtyProductIds: []
    },
    checkout: {
      inProgress: false
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasketComponent,
        BasketProductComponent,
        LayoutComponent,
        HeaderComponent,
      ],
      // We are NOT testing translations
      imports: [TranslateModule.forRoot()],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);
  });

  it('should display empty state', () => {
    store.setState({
      ...defaultState,
      basket: {
        products: [],
        loading: false,
        dirtyProductIds: []
      }
    })
    fixture.detectChanges();
    const de = fixture.debugElement;
    const emptyState = de.nativeElement.querySelector('[data-test="app-basket-empty"]') as HTMLElement;
    expect(emptyState).toBeTruthy();
  });

  it('should display 3 products', () => {
    store.setState({
      ...defaultState,
      basket: {
        products: [
          {
            id: 1,
            name: 'Test product 1',
            price: 100
          },
          {
            id: 2,
            name: 'Test product 2',
            price: 200
          },
          {
            id: 3,
            name: 'Test product 3',
            price: 50
          }
        ],
        loading: false,
        dirtyProductIds: []
      }
    });
    fixture.detectChanges();
    const de = fixture.debugElement;
    const products = de.nativeElement.querySelectorAll('app-basket-product') as NodeListOf<HTMLElement>;
    expect(products.length).toBe(3);
  });

  it('should display total price', () => {
    store.setState({
      ...defaultState,
      basket: {
        products: [
          {
            id: 1,
            name: 'Test product 1',
            price: 100
          },
          {
            id: 2,
            name: 'Test product 2',
            price: 200
          },
        ],
        loading: false,
        dirtyProductIds: []
      }
    });
    fixture.detectChanges();
    const de = fixture.debugElement;
    const totalPrice = de.nativeElement.querySelector('[data-test="app-basket-total-price"]');
    expect(totalPrice.innerHTML).toContain('$300')
  });

  it('checkout button should be disabled', () => {
    store.setState({
      ...defaultState,
      basket: {
        products: [
          {
            id: 1,
            name: 'Test product 1',
            price: 100
          },
          {
            id: 2,
            name: 'Test product 2',
            price: 200
          },
        ],
        loading: false,
        dirtyProductIds: []
      },
      wallet: {
        wallet: {
          balance: 250
        },
        loading: false
      }
    });
    fixture.detectChanges();
    const de = fixture.debugElement;
    const checkoutBtn = de.nativeElement.querySelector('[data-test="app-basket-checkout-button"]') as HTMLButtonElement;
    expect(checkoutBtn.disabled).toBe(true)
  });

  it('checkout button should be enabled', () => {
    store.setState({
      ...defaultState,
      basket: {
        products: [
          {
            id: 1,
            name: 'Test product 1',
            price: 100
          },
        ],
        loading: false,
        dirtyProductIds: []
      },
      wallet: {
        wallet: {
          balance: 250
        },
        loading: false
      }
    });
    fixture.detectChanges();
    const de = fixture.debugElement;
    const checkoutBtn = de.nativeElement.querySelector('[data-test="app-basket-checkout-button"]') as HTMLButtonElement;
    expect(checkoutBtn.disabled).toBe(false)
  });


})
