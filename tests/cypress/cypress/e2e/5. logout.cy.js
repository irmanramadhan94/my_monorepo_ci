describe ('Logout Dealls', () => {
    beforeEach(() => {

        cy.loginSession(); // restore session dari cache jika ada, jika tidak ada maka login ulang

        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app');
      
        cy.viewport(1920, 1080);
        
        cy.wait(5000);
      });
    it('logout successfully', () => {
       
        cy.get('[alt="user photo"]').click();
      
        cy.get('.rounded-b-md').click();
      

        cy.get('#dealls-navbar-login-btn').should('be.visible');
      
        //validasi success logout
        cy.get('#dealls-navbar-register-btn').should('be.visible');
      }); 
});