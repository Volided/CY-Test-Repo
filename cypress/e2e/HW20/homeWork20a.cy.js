describe('Login Test', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('BASE_URL'));
    });
  
    it('should log in with valid credentials', () => {
      cy.get('#user-name').type(Cypress.env('USERS_NAME'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
      cy.get('#login-button').click();
      
    });
  });
  