import testData from "./testData";

function selectRandomValueFromDropdown(selector) {
    cy.get(selector).find('option').then(options => {
      const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
      const randomValue = options[randomIndex].value;
  
      cy.get(selector).select(randomValue);
    });
}

function selectCheckbox(selector){
    cy.get(selector).check();
}

class RegistrationPage {
    
    verifyLoginVisible(){
        return cy.contains('Login to your account');
    }

    verifyNewUserSignupVisible(){
        return cy.contains('New User Signup!');
    }

    verifyEmailAndPassword(){
        return cy.contains('Your email or password is incorrect!');
    }

    fillSignUpForm(){
        cy.get('input[data-qa="signup-name"]').type(testData.signupName);
        cy.get('input[data-qa="signup-email"]').type(testData.signupEmail);
    }

    fillSignUpFormWithExistingEmail(){
        cy.get('input[data-qa="signup-name"]').type(testData.signupName);
        cy.get('input[data-qa="signup-email"]').type(testData.existingEmail);
    }

    fillLoginForm(){
        cy.get('input[data-qa="login-email"]').type(testData.existingEmail);
        cy.get('input[data-qa="login-password"]').type(testData.password);
    }

    fillLoginFormWithWrongEmail(){
        cy.get('input[data-qa="login-email"]').type(testData.incorrectEmail);
        cy.get('input[data-qa="login-password"]').type(testData.password);
    }

    fillLoginFormWithWrongPassword(){
        cy.get('input[data-qa="login-email"]').type(testData.existingEmail);
        cy.get('input[data-qa="login-password"]').type(testData.incorrectPassword);
    }

    loginButton(){
        return cy.get('button[data-qa="login-button"]');
    }

    logoutButton(){
        return cy.get('a[href*="/logout"]');
    }

    sighUpButton(){
        return cy.get('button[data-qa="signup-button"]');
    }

    verifyEnterAccountInformation(){
        return cy.contains("Enter Account Information");
    }

    fillRegisterForm(){
        const selectedGender = testData.shouldSelectMale ? '#id_gender1' : '#id_gender2';
        cy.get(selectedGender).check();

        cy.get('input[id="name"]').should('have.value', testData.signupName);
        cy.get('input[id="email"]').should('have.value', testData.signupEmail);
        cy.get('input[id="password"]').type(testData.password);

        cy.get('#days').find('option').then(options => {
            const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
            const randomValue = options[randomIndex].value;
          
            // Wybierz losową wartość z rozwijanej listy
            selectRandomValueFromDropdown('#days');
            selectRandomValueFromDropdown('#months');
            selectRandomValueFromDropdown('#years');
            selectRandomValueFromDropdown('#country');
          });

        //Select checkbox 'Sign up for our newsletter!'
        selectCheckbox('#newsletter');

        //Select checkbox 'Receive special offers from our partners!'
        selectCheckbox('#optin');

        //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('input[id="first_name"]').type(testData.signupName);
        cy.get('input[id="last_name"]').type(testData.signupLastName);
        cy.get('input[id="address1"]').type(testData.address);
        cy.get('input[id="state"]').type(testData.state);
        cy.get('input[id="city"]').type(testData.city);
        cy.get('input[id="zipcode"]').type(testData.zipcode);
        cy.get('input[id="mobile_number"]').type(testData.mobileNumber);

        //Click 'Create Account button'
        cy.get('button[data-qa="create-account"]').click();
    }

    verifyAccountCreations(){
        return cy.contains("Account Created!");
    }

    accountExist(){
        return cy.contains("Email Address already exist!");
    }

    continueButton(){
        return cy.get('[data-qa="continue-button"]');
    }

    verifyUserIsLogged(){
        return cy.contains("Logged in as " + testData.signupName);
    }

    deleteAccount(){
        return cy.get('a[href*="/delete_account"]');
    }

    confirmAccountDeletion(){
        return cy.contains("Account Deleted!");
    }
}

export default new RegistrationPage();