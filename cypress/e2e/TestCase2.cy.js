/// <reference types="cypress" />

import RegistrationPage from "../support/RegistrationPagePOM"
import MainPage from "../support/MainPagePOM"

describe("Test Case 2: Login User with correct email and password", () => {
    beforeEach(() => {
        cy.visit("/")

        //Verify that home page is visible successfully
        MainPage.slider().should('exist');

        //Click on 'Signup / Login' button
        MainPage.loginPageButton().click();

        //Verify 'New User Signup!' is visible
        RegistrationPage.verifyLoginVisible().should('be.visible');
    });

    it("Should login with correct email and password", () => {
        
        //Enter correct email address and password
        RegistrationPage.fillLoginForm();

        //Click 'login' button
        RegistrationPage.loginButton().click();

        //Verify that 'Logged in as username' is visible
        RegistrationPage.verifyUserIsLogged();

        //Click 'Delete Account' button
        RegistrationPage.deleteAccount().click();

        //Verify that 'ACCOUNT DELETED!' is visible
        RegistrationPage.confirmAccountDeletion();

    });

});


