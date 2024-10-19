describe('The homework 18/1', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    })

it('Header', () =>{
  
const buttons = [
    "Home",
    "About",
    "Contacts",
    "Guest log in",
    " Log out ",
    "Sign In"
  ];
  
  const clickWithDelay = (buttonText, delay) => {
    cy.contains(buttonText).click();
    cy.wait(delay);
  };
  
  buttons.forEach((button, index) => {
    clickWithDelay(button, 2000); 
  });
  
})

it('Footer', () =>{

    const links = [
    'https://www.facebook.com/Hillel.IT.School',
    "https://t.me/ithillel_kyiv",
    'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1',
    'https://www.instagram.com/hillel_itschool/',
    'https://www.linkedin.com/school/ithillel/',

  ];
  
  links.forEach((link) => {
   cy.get(`a[href="${link}"]`).then(($el) => {
      const stub = cy.stub();
      cy.wrap($el).invoke('on', 'click', stub);
      cy.wrap($el).click().then(() => {
    expect(stub).to.have.been.calledOnce;
      });
    });
  });
  cy.contains("ithillel.ua").click();
  cy.get(".footer_logo").click();
})



})