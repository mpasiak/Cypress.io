import testData from "./testData";

class MainPage {
    
    slider(){
        return cy.get('#slider');
    }

    loginPageButton(){
        return cy.get('a[href*="/login"]');
    }

    contactUsForm(){
        return cy.get('a[href*="/contact_us"]');
    }
}

export default new MainPage();