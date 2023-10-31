/// <reference types="cypress" />

import RegistrationPage from "../support/RegistrationPagePOM"
import MainPage from "../support/MainPagePOM"

describe("Test Case 3: Login User with incorrect email and password", () => {
    beforeEach(() => {
        cy.visit("/")

        //Verify that home page is visible successfully
        MainPage.slider().should('exist');

        //Click on 'Signup / Login' button
        MainPage.loginPageButton().click();

        //Verify 'New User Signup!' is visible
        RegistrationPage.verifyLoginVisible().should('be.visible');

    });

    it("Shouldn't login with incorrect email and password", () => {
        
        //Enter incorrect email address and correct password
        RegistrationPage.fillLoginFormWithWrongEmail();

        //Click 'login' button
        RegistrationPage.loginButton().click();

        //Verify error 'Your email or password is incorrect!' is visible
        RegistrationPage.verifyEmailAndPassword().should('be.visible');
        
    });

    it("Shouldn't login with incorrect email and password", () => {

        //Enter correct email address and incorrect password
        RegistrationPage.fillLoginFormWithWrongPassword();

        //Click 'login' button
        RegistrationPage.loginButton().click();

        //Verify error 'Your email or password is incorrect!' is visible
        RegistrationPage.verifyEmailAndPassword().should('be.visible');

    });

});


