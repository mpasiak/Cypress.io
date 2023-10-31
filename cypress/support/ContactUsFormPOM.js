import testData from "./testData";

class ContactForm {

    verifyContactPageIsVisible(){
        return cy.contains("Get In Touch");
    }

    fillContactForm(){
        cy.get('input[data-qa="name"]').type(testData.signupName);
        cy.get('input[data-qa="email"]').type(testData.existingEmail);
        cy.get('input[data-qa="subject"]').type(testData.randomShortText);
        cy.get('textarea[data-qa="message"]').type(testData.randomLongText);
    }

    uploadFile(){

        cy.fixture("example.png", "base64").then(fileContent => {
            cy.get('input[name="upload_file"]').attachFile({
              fileContent,
              fileName: "example.png",
              mimeType: "image/png"
            });
        cy.get('input[name="upload_file"]').should('be.visible');
        })
    };

    sendForm(){
        return cy.get('button[data-qa="submit-button"]');
    }

    confirmPopUp(){
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Press OK to proceed!'); // check text in popup
            return true; // click on "OK"
          });
          
          cy.get('button[data-qa="popup-button"]').click();
    }
}

export default new ContactForm();