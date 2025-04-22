describe('Login using valid credential', () => {
  beforeEach(() => {
    cy.session('loginSession', () => {
   
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/');

    cy.get('#dealls-navbar-login-btn').click();
  
    cy.get('#basic_email').click();
  
    cy.get('#basic_email').type("sullivanx94@gmail.com");
  
    cy.get('#basic_password').click();
  
    cy.get('#basic_password').type("Qwerty@12345");
  
    cy.get('.border-none').click();
  
    cy.get('[alt="user photo"]').should('be.visible');
  });
  });

  it('Login session is created', () => {
    
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/');
    cy.wait(3000);
    cy.get('[alt="user photo"]').should('be.visible');
    // cy.getCookie('loginSession').should('exist');
  });

});
// cacheAcrossSpecs: true