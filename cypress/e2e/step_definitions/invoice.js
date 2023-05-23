import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import invoice from "../../support/pageObjects/invoice";

Given('I am on {string} page', (pageName) => {
    cy.validatePage(pageName)
});

When('I Click on Invoice Details link for the first item presented in the screen', () => {
    invoice.openDetails()
});

When('The application opens the {string} screen', (pageName) => {
    cy.validatePage(pageName)
})

Then('The information in the screen matches the one provided in the data table', () => {
    invoice.validateDetails()
})
