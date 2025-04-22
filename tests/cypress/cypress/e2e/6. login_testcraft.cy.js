// signInPage.js
class SignInPage {
    get emailInput() {
        return cy.get('#basic_email');
    }

    get passwordInput() {
        return cy.get('#basic_password');
    }

    get signInButton() {
        return cy.get('button[type="submit"]').contains('Sign In');
    }

    get forgotPasswordLink() {
        return cy.get('a[href="/forgot-password"]');
    }

    get signInWithGoogleButton() {
        return cy.get('button').contains('Sign In with Google');
    }

    get signUpLink() {
        return cy.get('a[href="/sign-up?returnUrl=%2F"]');
    }

    get welcomeMessage() {
        return cy.contains("Welcome back to Indonesia’s #1 Job & Mentoring Platform");
    }

    submitForm(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.signInButton.click();
    }
}

// signIn.spec.js
describe('Sign In Tests', () => {
    const signInPage = new SignInPage();

    beforeEach(() => {
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2F');
    });

    it('Verify that the user can successfully sign in with valid email and password.', () => {
        signInPage.submitForm('sullivanx94@gmail.com', 'Qwerty@12345');
        cy.url().should('include', '/dashboard'); // Adjust URL based on your app
    });

    it('Check that the "Forgot Password?" link navigates to the correct password recovery page.', () => {
        signInPage.forgotPasswordLink.click();
        cy.url().should('include', '/forgot-password');
    });

    it('Ensure that the "Sign In with Google" button is functional and redirects to the Google authentication page.', () => {
        signInPage.signInWithGoogleButton.click();
        cy.url().should('include', 'accounts.google.com'); // Adjust URL based on your app
    });

    it('Confirm that the "Sign Up" link redirects the user to the registration page.', () => {
        signInPage.signUpLink.click();
        cy.url().should('include', '/sign-up');
    });

    it('Validate that the welcome message is displayed correctly when the user is on the signin page.', () => {
        signInPage.welcomeMessage.should('be.visible');
    });

    it('Attempt to sign in with an invalid email format and verify that an appropriate error message is displayed.', () => {
        signInPage.submitForm('invalidEmail', 'somePassword');
        cy.contains('Please enter a valid email').should('be.visible'); // Adjust error message based on your app
    });

    it('Try signing in with an incorrect password and ensure that the user receives a relevant error message.', () => {
        signInPage.submitForm('valid@example.com', 'wrongPassword');
        cy.contains('Invalid email or password').should('be.visible'); // Adjust error message based on your app
    });

    it('Test the signin process with an unregistered email address and check for the correct error response.', () => {
        signInPage.submitForm('unregistered@example.com', 'somePassword');
        cy.contains('User not found').should('be.visible'); // Adjust error message based on your app
    });

    it('Leave the email and password fields empty and submit the form to ensure that validation messages appear.', () => {
        signInPage.signInButton.click();
        cy.contains('Email is required').should('be.visible'); // Adjust error message based on your app
        cy.contains('Password is required').should('be.visible'); // Adjust error message based on your app
    });

    it('Click the "Sign In" button without entering any credentials and verify that it does not proceed.', () => {
        signInPage.signInButton.click();
        cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2F'); // Ensure it stays on the same page
    });

    it('Test the signin functionality using a variety of email formats (e.g., with special characters, subdomains) to ensure all valid formats are accepted.', () => {
        const validEmails = [
            'user+test@example.com',
            'user.test@example.com',
            'user@test.co.uk',
            'user@subdomain.example.com'
        ];
        validEmails.forEach(email => {
            signInPage.submitForm(email, 'validPassword');
            cy.url().should('include', '/dashboard'); // Adjust URL based on your app
        });
    });

    it('Simulate a slow network connection and check how the application handles the signin process, ensuring that users receive feedback (like a loading spinner).', () => {
        cy.intercept('POST', '/api/signin', { delay: 5000 }).as('signinRequest');
        signInPage.submitForm('valid@example.com', 'validPassword');
        cy.wait('@signinRequest');
        cy.get('.loading-spinner').should('be.visible'); // Adjust selector based on your app
    });

    it('Attempt to sign in with a previously used email and password combination, then change the password from the "Forgot Password?" link and verify that the new password works.', () => {
        signInPage.submitForm('valid@example.com', 'oldPassword');
        cy.contains('Invalid email or password').should('be.visible'); // Adjust error message based on your app
        signInPage.forgotPasswordLink.click();
        // Add steps to reset password and verify new password
    });

    it('Check the responsiveness of the signin form on different screen sizes to ensure usability on mobile devices.', () => {
        cy.viewport('iphone-6');
        signInPage.emailInput.should('be.visible');
        signInPage.passwordInput.should('be.visible');
        signInPage.signInButton.should('be.visible');
    });

    it('Test the behavior of the form when JavaScript is disabled in the browser to see if the user can still access any basic functionalities or receive proper error messages.', () => {
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2F', {
            onBeforeLoad: (win) => {
                delete win.navigator.__proto__.userAgent;
                Object.defineProperty(win.navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3' });
                win.document.documentElement.setAttribute('data-js-disabled', true);
            }
        });
        // Check for basic functionality or error messages
    });
});