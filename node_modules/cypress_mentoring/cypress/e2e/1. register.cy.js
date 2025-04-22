describe('Register Dealls', () => {
it('User successfully registered', () => {
   
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/');
  
    // cy.viewport(1920, 1080);
  
    // Click on <a> "Daftar"
    cy.get('#dealls-navbar-register-btn').click();
  
    // Click on <a> "Sign Up With Email"
    cy.get('[href="/onboarding?step=1"]').click();
  
    // Click on <input> #fullName
    cy.get('#fullName').click();
  
    // Fill "Irman Ramadhan" on <input> #fullName
    cy.get('#fullName').type("Irman Ramadhan");
  
    // Click on <span> "Selanjutnya"
    cy.get('.order-1 > span').click();
  
    // Click on <input> #jobSearchStatus
    cy.get('#jobSearchStatus').click();
  
    // Click on <p> "Actively looking for the ..."
    cy.get('.ant-select-item-option-active .font-semibold').click();
  
    // Click on <input> #whatsapp
    cy.get('#whatsapp').click();
  
    // Fill "6287725657897" on <input> #whatsapp
    cy.get('#whatsapp').type("6287725657897");
  
    // Click on <input> #email
    cy.get('#email').click();
  
    // Fill "... on <input> #email
    const randomEmail = Math.random().toString(36).substring(2, 15) + '@example.com';
    cy.get('#email').type(randomEmail);

    // Click on <input> #campus
    cy.get('#campus').click();
  
    // Fill "ind" on <input> #campus
    cy.get('#campus').type("Unikom");
    cy.get('#campus').type('{enter}');
    // Click on <div> "University of Indonesia"
   
    // Click on <input> #eligibility
    cy.get('#eligibility').click();
  
    // Click on <div> "4 - 5 YoE"
    cy.get('.ant-select-item:nth-child(7) > .ant-select-item-option-content').click();
  
    // Click on <span> "Selanjutnya"
    cy.get('.order-1 > span').click();

    cy.wait(5000);
    // Click on <p> "Skip for now, my CV is no..."
    cy.get('.text-neutral-100:nth-child(1)').click();
  
    // Click on <span> "Selanjutnya"
    cy.get('.order-1 > span').click();
  
    // Click on <input> #companyName
    cy.get('#companyName').click();
  
    // Fill "shope" on <input> #companyName
    cy.get('#companyName').type("shope");
  
    // Click on <div> "Bank Shope"
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
  
    // Click on <input> #roleLevel
    cy.get('#roleLevel').click();
    cy.wait(2000);
    cy.get('#roleLevel').type("Director");
    cy.wait(2000);
    cy.get('#roleLevel').type('{enter}');
  
    // Click on <input> #roleName
    cy.get('#roleName').click();
  
    // Fill "VP Eng" on <input> #roleName
    cy.get('#roleName').type("VP Eng");
  
    // Click on <button> "Add `VP Eng`"
    cy.get('.ant-select-dropdown-empty .flex').click();
  
    // Click on <input> #startDate
    cy.get('#startDate').click();
  
    // Fill "02/2022" on <input> #startDate
    cy.get('#startDate').type("02/2022");
  
    // Click on <input> #endDate
    cy.get('#endDate').click();
  
    // Fill "02/2025" on <input> #endDate
    cy.get('#endDate').type("02/2025");
  
  
    // Click on <input> .ant-checkbox-input
    cy.get('.ant-checkbox-input').click();
  
    // Click on <span> "Selanjutnya"
    cy.get('.order-1 > span').click();
    cy.wait(2000);
    // Click on <span> "Selanjutnya"
    cy.get('.order-1 > span').click();
  
    // Click on <input> #password
    cy.get('#password').click();
  
    // Fill "Qwerty@12345" on <input> #password
    cy.get('#password').type("Qwerty@12345");
  
    // Click on <input> #passwordConfirmation
    cy.get('#passwordConfirmation').click();
  
    // Fill "Qwerty@12345" on <input> #passwordConfirmation
    cy.get('#passwordConfirmation').type("Qwerty@12345");
  
    // Click on <input> #checkPrivacyPolicy
    cy.get('#checkPrivacyPolicy').click();
  
    // Click on <button> "Finish"
    cy.get('#dealls-onboarding-finish').click();
    
    // Hover over <h2> "Welcome to Dealls!"
    cy.get('.mt-1', { timeout : 10000}).should('be.visible');
    cy.get('.mt-1').type('{esc}');
  
    // Validasi logo image <img> [alt="user photo"]
    cy.get('[alt="user photo"]').should('be.visible');
  });
});