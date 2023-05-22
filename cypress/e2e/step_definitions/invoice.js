import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";
import invoice from "../../support/pageObjects/invoice";

Given('I am on {string} page', (pageName) => {
    cy.contains(pageName).should('be.visible')
});

When('I Click on Invoice Details link for the first item presented in the screen', () => {
    invoice.openDetails()
});

When('The application opens the {string} screen', (pageName) => {
    cy.contains(pageName).should('be.visible')
})

Then('The information in the screen matches the one provided in the data table', () => {
    invoice.validateDetails()
})
