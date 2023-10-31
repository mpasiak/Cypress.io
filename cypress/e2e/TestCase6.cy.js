/// <reference types="cypress" />

import MainPage from "../support/MainPagePOM"
import ContactForm from "../support/ContactUsFormPOM"
// import RegistrationPage from "../support/RegistrationPagePOM"

describe("Test Case 6: Contact Us Form", () => {
    beforeEach(() => {
        cy.visit("/")

        //Verify that home page is visible successfully
        MainPage.slider().should('exist');

    });

    it("Should send message via Contact Us Form", () => {

        //Click on 'Contact Us' button
        MainPage.contactUsForm().click();

        //Verify 'GET IN TOUCH' is visible
        ContactForm.verifyContactPageIsVisible().should('be.visible');

        //Enter name, email, subject and message
        ContactForm.fillContactForm();

        //Upload file
        ContactForm.uploadFile();

        //Click 'Submit' button
        ContactForm.sendForm().click();

        //Click OK button
        ContactForm.confirmPopUp();

        //Verify success message 'Success! Your details have been submitted successfully.' is visible
        ContactForm.verifySuccessMessage();

        //Click 'Home' button and verify that landed to home page successfully
        ContactForm.homeButton().click();
        MainPage.slider();

    });
});