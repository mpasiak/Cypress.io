const randomEmail = () => {
    const randomValue = Math.floor(Math.random() * 100);
    return `malgorzata${randomValue}@example.com`;
  };

const randomEmailAddress = randomEmail();

const testData = {
    signupName: "Malgorzata",
    signupLastName: "Pasiak",
    signupEmail: randomEmailAddress,
    existingEmail:"malgorzata@example.com",
    incorrectEmail:"randomwrongmail@example.com",
    incorrectPassword:"wrongPassword",
    password:"password1",
    address: "Street number",
    state: "dolnoslaskie",
    city: "Wroclaw",
    zipcode: "50-000",
    mobileNumber: "500000000",
    shouldSelectMale: false,
    randomShortText: "Lorem ipsum dolor sit amet",
    randomLongText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

export default testData;