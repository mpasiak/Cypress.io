/// <reference types="cypress" />

import RegistrationPage from "../support/RegistrationPagePOM"
import MainPage from "../support/MainPagePOM"

describe("Test Case 5: Register User with existing email", () => {
    beforeEach(() => {
        cy.visit("/")

        //Verify that home page is visible successfully
        MainPage.slider().should('exist');

        //Click on 'Signup / Login' button
        MainPage.loginPageButton().click();

        //Verify 'New User Signup!' is visible
        RegistrationPage.verifyLoginVisible().should('be.visible');
    });

    it("Shouldn't register user with existing email", () => {

        //Enter name and already registered email address
        RegistrationPage.fillSignUpFormWithExistingEmail();

        //Click 'Signup' button
        RegistrationPage.sighUpButton().click();

        //Verify error 'Email Address already exist!' is visible
        RegistrationPage.accountExist().should('be.visible');
        
    });
});