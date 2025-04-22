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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginSession', () => {
    cy.session('loginSession', () => {
        console.log('⏩ Login ulang karena session belum ada atau expired');
        cy.visit('/');
        cy.get('#dealls-navbar-login-btn').click();
        cy.get('#basic_email').type('sullivanx94@gmail.com');
        cy.get('#basic_password').type('Qwerty@12345');
        cy.get('.border-none').click();
        cy.get('[alt="user photo"]').should('be.visible');
    });
  });
