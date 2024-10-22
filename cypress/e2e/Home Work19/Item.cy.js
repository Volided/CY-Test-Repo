import LoginPage from "../../support/pageObject/page/LoginPage" 
import testData from "../../fixtures/credentials.json"

describe('Login with pom inventory', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames, testData.password);
    })

    it.only('Verify Products info', () => {
        cy.get('.inventory_item_img').should('be.visible');
        cy.get('[data-test="inventory-item-name"]').should('be.visible');
        cy.get('[data-test="inventory-item-desc"]').should('be.visible');
        cy.get('[data-test="inventory-item-price"]').should('be.visible');

      })

      it.only('Verify Remove button', () => {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#remove-sauce-labs-backpack").should('be.visible');


      })

      it.only('Verify Add to Cart button', () => {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#remove-sauce-labs-backpack").click();
        cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible');

})

})