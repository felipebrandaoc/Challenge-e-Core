# Script made by Felipe Brandão Costa
# Brazil, 20/05/2023
# Code Challenge e-Core

# This feature's goal is to test the Login Page, including positive and negative scenarios. (en-US)
# O objetivo dessa feature é testar a Página de Login, incluindo cenários positivos e negativos. (pt-BR)

Feature: Login Page

    Scenario: TC001 - Login Successfully
        Given I have the main page loaded
        When I fill the email field with "demouser"
        And I fill the password field with "abc123"
        And I click on "Login" button
        Then I should be redirected to the page "Invoice List"

    Scenario Outline: TC002 - Invalid Login
        Given I have the main page loaded
        When I fill the email field with "<email>"
        And I fill the password field with "<password>"
        And I click on "Login" button
        Then The application shows the message "Wrong username or password"

        Examples:
            | email     | password |
            | Demouser  | abc123   |
            | demouser_ | xyz      |
            | demouser  | nananana |
            | demouser  | abc123   |
