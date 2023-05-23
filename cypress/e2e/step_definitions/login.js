import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import login from "../../support/pageObjects/login";

Given('I have the main page loaded', () => {
  login.acessAndValidateLoginPage()
});

When('I fill the email field with {string}', username => {
  login.typeUsername(username)
});

When('I fill the password field with {string}', password => {
  login.typePassword(password)
});

When('I click on {string} button', button => {
  cy.clickButton(button)
});

Then('I should be redirected to the page {string}', pageName => {
  cy.validatePage(pageName)
});

Then('The application shows the message {string}', message => {
  cy.contains(message).should('be.visible')
})
