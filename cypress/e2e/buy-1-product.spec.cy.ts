import {environment} from '../../src/environments/environment';
import {cyProducts} from '../data/products';

describe('Ultra Marketplace', () => {

  it('Buy 2 products', () => {

    // go to home page
    cy.visit('http://localhost:4200', {
      onBeforeLoad: function (window) {
        // set test data to localStorage
        window.localStorage.setItem(environment.localStorageKeys.products, JSON.stringify(cyProducts));
        window.localStorage.setItem(environment.localStorageKeys.wallet, JSON.stringify({
          balance: 100
        }));
      }
    })

    // go to basket page
    cy.get('[data-test="app-header-basket"]').click();
    cy.url().should('include', '/basket');

    // basket is empty
    cy.get('[data-test="app-basket-empty"]');

    // go to home page
    cy.get('[data-test="app-header-home"]').click();
    // home component is rendered
    cy.get('app-home')

    cy.addProductToBasket(cyProducts[1].name);

    cy.addProductToBasket(cyProducts[0].name);

    // Load more products
    cy.get('[data-test="app-home-load-more"]').click();

    cy.addProductToBasket(cyProducts[24].name);

    // 3 elements in basket
    cy.get('[data-test="app-header-basket"]').contains('(3)')

    // go to basket page
    cy.get('[data-test="app-header-basket"]').click();
    cy.url().should('include', '/basket');

    // 3 products in basket
    cy.get('app-basket-product')
      .its('length')
      .should('eq', 3)

    // checkout button is disabled
    cy.get('[data-test="app-basket-checkout-button"]')
      .should('be.disabled');

    cy.removeProductFromBasket(cyProducts[1].name);

    // 2 products in basket
    cy.get('app-basket-product')
      .its('length')
      .should('eq', 2)

    cy.removeProductFromBasket(cyProducts[24].name);

    // 1 product in basket
    cy.get('app-basket-product')
      .its('length')
      .should('eq', 1)

    // checkout button is enabled
    cy.get('[data-test="app-basket-checkout-button"]')
      .should('be.enabled');

    // go to checkout page
    cy.get('[data-test="app-basket-checkout-button"]').click();
    cy.url().should('include', '/checkout');

    // fill in form inputs
    cy.get('#app-checkout-form-firstName').type('Marko');
    cy.get('#app-checkout-form-lastName').type('Vujovic');
    cy.get('#app-checkout-form-street').type('Kralja Nikole');
    cy.get('#app-checkout-form-city').type('Podgorica');
    cy.get('#app-checkout-form-state').type('Montenegro');
    cy.get('#app-checkout-form-email').type('test@gmail.com');

    // pay button should be enabled
    cy.get('[data-test="app-checkout-form-pay"]').should('be.enabled');

    // submit form
    cy.get('[data-test="app-checkout-form-pay"]').click();

    cy.wait(2000);

    // basket is empty
    cy.get('[data-test="app-header-basket"]').contains('(0)')

  })


})
