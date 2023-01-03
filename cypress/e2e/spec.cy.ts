import {environment} from '../../src/environments/environment';
import {cyProducts} from '../data/products';
import {cyWallet} from '../data/wallet';

describe('Ultra Marketplace', () => {

  it('Buy 2 products', () => {

    // go to home page
    cy.visit('http://localhost:4200', {
      onBeforeLoad: function (window) {
        // set test data to localStorage
        window.localStorage.setItem(environment.localStorageKeys.products, JSON.stringify(cyProducts));
        window.localStorage.setItem(environment.localStorageKeys.wallet, JSON.stringify(cyWallet));
      }
    })

    // home component is rendered
    cy.get('app-home')

    // header is displayed
    cy.contains('Ultra Marketplace')

    cy.addProductToBasket(cyProducts[15].name);

    // 1 element in basket
    cy.get('[data-test="app-header-basket"]').contains('(1)')

    cy.addProductToBasket(cyProducts[0].name);

    // 2 elements in basket
    cy.get('[data-test="app-header-basket"]').contains('(2)')

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

    // remove product from basket
    cy.removeProductFromBasket(cyProducts[0].name);

    // 2 products in basket
    cy.get('[data-test="app-header-basket"]').contains('(2)')
    cy.get('app-basket-product')
      .its('length')
      .should('eq', 2)

    // go to checkout page
    cy.get('[data-test="checkout-button"]').click();
    cy.url().should('include', '/checkout');

    // fill in form inputs
    cy.get('#firstName').type('Marko');
    cy.get('#lastName').type('Vujovic');
    cy.get('#street').type('Kralja Nikole');
    cy.get('#city').type('Podgorica');
    cy.get('#state').type('Montenegro');
    cy.get('#email').type('markovujovic1604@gmail.com');

    // submit form
    cy.get('[data-test="app-checkout-form-pay"]').click();

    cy.wait(2000);

    // basket is empty
    cy.get('[data-test="app-header-basket"]').contains('(0)')

    // go to home page
    cy.get('[data-test="app-checkout-buy-more"]').click();
    // home component is rendered
    cy.get('app-home')

    // wait for products to load
    cy.get('app-product')

    // product still exists
    cy.get(`app-product img[alt="${cyProducts[0].name}"]`)

    // product is removed
    cy.get(`app-product img[alt="${cyProducts[15].name}"]`)
      .should('not.exist');

  })


})
