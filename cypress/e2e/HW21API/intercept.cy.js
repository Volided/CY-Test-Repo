import { myCars } from "../../fixtures/myCars"

describe('API test', () => {
 
     beforeEach(() => {

     })

     it('Seccess login test', ()=> {
  //      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })

        let value = true
        cy.intercept('GET', '**/cars' , (req) => {
            req.reply((res) => {
            
                if(value)
                {
                    res.body = myCars
                } 
                });
          });
        

       // cy.intercept('GET', '**/cars' , { statusCode: 404, body: 'Not Found' })
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('volided123@gmail.com');
        cy.get('#signinPassword').type("Qwerty12");
        cy.contains('Login').click();

     })
 
 })