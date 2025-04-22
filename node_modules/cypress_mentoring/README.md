# How to Use the Cypress Project

1. **Clone the Repository**
    Clone this repository to your computer using the following command:
    ```
    git clone <repository-url>
    ```

2. **Navigate to the Project Directory**
    Move to the project directory:
    ```
    cd cypress_mentoring/cypress
    ```

3. **Install Dependencies**
    Make sure you have Node.js installed. Then run the following command to install the dependencies:
    ```
    npm install
    ```

4. **Open Cypress**
    To open the Cypress GUI Test Runner, run the command:
    ```
    npx cypress open
    ```

5. **Run Tests**
    Select a test to run in the Cypress Test Runner, or run all tests in headless mode with the following commands:
    ```
    npx cypress run => runs all scenarios in cypress/e2e
    npx cypress run --spec "cypress/e2e/<scenario file>.cy.js" => runs a single scenario file
    ```

6. **View Test Results**
    After the tests are completed, you can view the results in the terminal or open the test report if available.

7. **Additional Configuration**
    If needed, adjust the configuration in the `cypress.config.js` file according to your project requirements.

Happy testing!
