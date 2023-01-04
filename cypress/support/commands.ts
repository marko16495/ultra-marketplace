// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    addProductToBasket(productName: string): typeof addProductToBasketCommand;
    removeProductFromBasket(productName: string): typeof removeProductFromBasketCommand;
  }
}

function addProductToBasketCommand(productName: string): void {
  cy.get(`app-product img[alt="${productName}"]`)
    .parent()
    .within(() => {
      // Add Product to basket
      cy.get('[data-test="app-product-add-to-basket-button"]').click();
      // Remove from basket button appears
      cy.get('[data-test="app-product-remove-from-basket-button"]')
    })
}

function removeProductFromBasketCommand(productName: string): void {
  cy.get(`[data-test="app-basket-product-image"][alt="${productName}"]`)
    .parent()
    .within(() => {
      cy.get('[data-test="app-basket-product-remove-button"]').click();
    })
}

//
// NOTE: You can use it like so:
Cypress.Commands.add('addProductToBasket', addProductToBasketCommand);
Cypress.Commands.add('removeProductFromBasket', removeProductFromBasketCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
