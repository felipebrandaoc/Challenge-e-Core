const elem = require('./elements').ELEMENTS;
const iv = require('./elements').INVOICE_DATA;

class invoice {

    openDetails() {
        cy.get(elem.invoice_details).invoke('removeAttr', 'target').click()
        cy.contains('Invoice Details').should('be.visible')
    }

    validateDetails() {
        // Hotel Name
        cy.get(elem.hotel_name).should('have.text', iv.HotelName)
        // Invoice Date
        cy.get(elem.invoice_date).then((value) => {  
            expect(value.text().replace('Invoice Date: ', "")).to.equal(iv.InvoiceDate)
        }) 
        // Due Date
        cy.get(elem.due_date).then((value) => {  
            expect(value.text().replace('Due Date: ', "")).to.equal(iv.DueDate)
        }) 
        // Invoice Number
        cy.get(elem.invoice_number).invoke('text').should('contains', iv.InvoiceNumber)
        // Booking Code
        cy.contains('Booking Code').next().invoke('text').should('be.equal', iv.BookingCode)
        //Customer Details
        cy.contains('Customer Details').next().invoke('text')
            .should('contains', 'JOHNY SMITH')
            .should('contains', 'R2, AVENUE DU MAROC')
            .should('contains', '123456')
        // Room
        cy.contains('Room').next().invoke('text').should('be.equal', iv.Room)
        // Check In
        cy.contains('Check-In').next().invoke('text').should('be.equal', iv.CheckIn)
        // Check Out
        cy.contains('Check-Out').next().invoke('text').should('be.equal', iv.CheckOut)
        // Total Stay Count
        cy.contains('Total Stay Count').next().invoke('text').should('be.equal', iv.TotalStayCount)
        // Total Stay Amount
        cy.contains('Total Stay Amount').next().invoke('text').should('be.equal', iv.TotalStayAmount)
        // Deposit Now
        cy.get(elem.deposit_now).invoke('text').should('be.equal', iv.DepositNow)
        // Tax & VAT
        cy.get(elem.tax_e_vat).invoke('text').should('be.equal', iv.TaxeVAT)
        // Total Amount
        cy.get(elem.total_amount).invoke('text').should('be.equal', iv.TotalAmount)
    }
}

export default new invoice();