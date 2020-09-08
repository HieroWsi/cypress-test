const {
  testingPageAdress,
  mainMenuLoginButton,
  overlayRight,
  registerNewAccountTab,
  signInButton,
  emailAdressInput,
  passwordInput,
} = require("../../core");

describe("Register new account", () => {
  beforeEach(() => {
    cy.visit(testingPageAdress, { timeout: 5000 });
  });

  //Check login with invalid credentials
  it("Should pass if can register new account", () => {
    cy.get(mainMenuLoginButton, { timeout: 5000 }).should("be.visible").click();
    cy.get(overlayRight, { timeout: 5000 }).should("be.visible");
    cy.get(registerNewAccountTab, { timeout: 5000 }).click();
    //Type correct email
    cy.get(emailAdressInput, { timeout: 5000 }).clear().type("admin@admin.com");
    //Type correct password
    cy.get(passwordInput, { timeout: 5000 }).clear().type("12345");
    cy.get(signInButton).click();
    //to be continued
    cy.wait(3000);
  });
});
