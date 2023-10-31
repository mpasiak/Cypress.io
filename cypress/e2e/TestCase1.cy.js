/// <reference types="cypress" />

import RegistrationPage from "../support/RegistrationPagePOM"
import MainPage from "../support/MainPagePOM"

describe("Test Case 1: Register User", () => {
    beforeEach(() => {
        cy.visit("/")

        //Verify that home page is visible successfully
        MainPage.slider().should('exist');

        //Click on 'Signup / Login' button
        MainPage.loginPageButton().click();

        //Verify 'New User Signup!' is visible
        RegistrationPage.verifyNewUserSignupVisible().should('be.visible');
    });

    it("Should fill and submit the registration form", () => {

        //Enter name and email address
        RegistrationPage.fillSignUpForm();

        // Click 'Signup' button
        RegistrationPage.sighUpButton().click();

        //Verify 'ENTER ACCOUNT INFORMATION' is visible
        RegistrationPage.verifyEnterAccountInformation().should('be.visible');

        //Fill details: Title, Name, Email, Password, Date of birth
        RegistrationPage.fillRegisterForm();

        //Verify that 'ACCOUNT CREATED!' is visible
        RegistrationPage.verifyAccountCreations();

        //Click 'Continue' button
        RegistrationPage.continueButton().click();

        //Verify that 'Logged in as username' is visible
        RegistrationPage.verifyUserIsLogged().should('be.visible');
    });

    it("Should delete the user account", () => {
        
        //Enter name and email address
        RegistrationPage.fillSignUpForm();

            // Click 'Signup' button
        RegistrationPage.sighUpButton().click();

        //Verify 'ENTER ACCOUNT INFORMATION' is visible
        RegistrationPage.verifyEnterAccountInformation().should('be.visible');

        //Fill details: Title, Name, Email, Password, Date of birth
        RegistrationPage.fillRegisterForm();

        //Verify that 'ACCOUNT CREATED!' is visible
        RegistrationPage.verifyAccountCreations();

        //Click 'Continue' button
        RegistrationPage.continueButton().click();

        //Verify that 'Logged in as username' is visible
        RegistrationPage.verifyUserIsLogged().should('be.visible');

        //Click 'Delete Account' button
        RegistrationPage.deleteAccount().click();

        //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        RegistrationPage.confirmAccountDeletion();
        RegistrationPage.continueButton().click();
    });

})

