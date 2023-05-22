# Script made by Felipe Brandão Costa
# Brazil, 20/05/2023
# Code Challenge e-Core

# This feature's goal is to validate the Invoice Page's details. (en-US)
# O objetivo dessa feature é validar os detalhes da página Invoice. (pt-BR)

Feature: Invoice Page

    Background:
        Given I have the main page loaded
        When I fill the email field with "demouser"
        And I fill the password field with "abc123"
        And I click on "Login" button
        Then I should be redirected to the page "Invoice List"

    Scenario: TC003 - Validate invoice details
        Given I am on "Invoice List" page
        When I Click on Invoice Details link for the first item presented in the screen
        Then The application opens the "Invoice Details" screen
        And The information in the screen matches the one provided in the data table
