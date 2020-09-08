const {
  testingPageAdress,
  mainMenuLoginButton,
  overlayRight,
  activeTab,
  signInToAccountTab,
  passwordInput,
  emailAdressInput,
  signInButton,
  errorForm,
} = require("../../core");

describe("login from the home page", () => {
  beforeEach(() => {
    cy.visit(testingPageAdress, { timeout: 5000 });
  });
  afterEach(() => {
    cy.reload();
  });

  //Check correct log in
  it("Should pass if can log into using test account", () => {
    cy.get(mainMenuLoginButton, { timeout: 5000 }).should("be.visible").click();
    cy.get(overlayRight, { timeout: 5000 }).should("be.visible");
    cy.get(activeTab)
      .invoke("text")
      .then((text) => {
        if (text !== "Sign in to account") {
          cy.get(`${signInToAccountTab}`, {
            timeout: 5000,
          }).click();
        }
      });
    cy.get(emailAdressInput)
      .invoke("val")
      .then((val) => {
        if (val !== "admin@example.com") {
          cy.get(`${emailAdressInput}`, {
            timeout: 5000,
          })
            .clear()
            .type("admin@example.com");
        }
      });
    cy.get(passwordInput)
      .invoke("val")
      .then((val) => {
        if (val !== "admin") {
          cy.get(`${passwordInput}`, {
            timeout: 5000,
          })
            .clear()
            .type("admin");
        }
      });
    cy.get(signInButton).click();
    cy.request("https://pwa.demo.saleor.rocks/graphql/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  //Check login with invalid credentials
  it("Should pass if cannot login with wrong credencials", () => {
    cy.get(mainMenuLoginButton, { timeout: 5000 }).should("be.visible").click();
    cy.get(overlayRight, { timeout: 5000 }).should("be.visible");
    cy.get(emailAdressInput, { timeout: 5000 }).clear().type("admin@admin.com");
    cy.get(passwordInput, { timeout: 5000 }).clear().type("xyz");
    cy.get(signInButton).click();
    cy.get(errorForm)
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("Please, enter valid credentials");
      });
  });
});
