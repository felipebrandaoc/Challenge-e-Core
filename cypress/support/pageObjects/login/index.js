const elem = require('./elements').ELEMENTS;

class login {

    acessAndValidateLoginPage(){
        cy.visit('/') 
        cy.get(elem.username).should('be.visible')
    }

    typeUsername(username){
        cy.get(elem.username).type(username)
    }

    typePassword(password){
        cy.get(elem.password).type(password)
    }
}

export default new login();
