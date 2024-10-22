import LoginPage from "../../support/pageObject/page/LoginPage" 
import testData from "../../fixtures/credentials.json"

describe('Login with pom inventory', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames, testData.password);
    })

    it.only('Verify sorting options number', () => {
       cy.get('[data-test="product-sort-container"] option').should('have.length',4);
    })

    it.only('Verify UI elements', () => {
        cy.get("#react-burger-menu-btn");
        cy.get("#shopping_cart_container");
        cy.get('[data-test="product-sort-container"]');

      })
      
      it.only('Verify redirect to Cart', () =>{
        cy.get("#shopping_cart_container").click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');

      })

      it.only('Verify Item opening', () =>{
        cy.contains('Sauce Labs Backpack').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4');

      })


})

   
