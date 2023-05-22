// This file contains the elements that will be used on the page (selectors, variables, data, etc) 

export const ELEMENTS = {
    invoice_details: 'a[href="/invoice/0"]',
    hotel_name: 'h4.mt-5',
    invoice_date: '.container > ul > :nth-child(1)',
    due_date: 'ul > :nth-child(2)',
    invoice_number: '.mt-2',
    deposit_now: ':nth-child(12) > tbody > tr > :nth-child(1)',
    tax_e_vat: ':nth-child(12) > tbody > tr > :nth-child(2)',
    total_amount: 'tbody > tr > :nth-child(3)'
};

export const INVOICE_DATA = {    
    Username: "demouser",
    Password: "abc123",
    HotelName: "Rendezvous Hotel",
    InvoiceDate: "14/01/2018",
    DueDate: "15/01/2018",
    InvoiceNumber: "110",
    BookingCode: "0875",
    CustomerDetails: "JOHNY SMITH R2, AVENUE DU MAROC 123456",
    Room: "Superior Double",
    CheckIn: "14/01/2018",
    CheckOut: "15/01/2018",
    TotalStayCount: "1",
    TotalStayAmount: "$150",
    DepositNow: "USD $20.90",
    TaxeVAT: "USD $19",
    TotalAmount: "USD $209"
};
