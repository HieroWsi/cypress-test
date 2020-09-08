//Testing page adress url
const testingPageAdress = "https://demo.saleor.io/";

//DOM Selectors
const homePage = 'div[class^="home-page"]';
const mainMenuLoginButton = 'li[data-testid^="login-btn"]';
const overlayRight = 'div[class^="overlay__right"]';
const emailAdressInput = 'input[name^="email"]';
const passwordInput = 'input[name^="password"]';
const activeTab = 'span[class^="active-tab"]';
const registerNewAccountTab = 'div[class^="login__tabs"] > span:nth-child(2)';
const signInToAccountTab = 'div[class^="login__tabs"] > span:nth-child(1)';
const signInButton = 'button[type^="submit"]';
const errorForm = 'span[class^="form-error"]';

module.exports = {
  testingPageAdress,
  mainMenuLoginButton,
  emailAdressInput,
  passwordInput,
  overlayRight,
  activeTab,
  homePage,
  registerNewAccountTab,
  signInToAccountTab,
  signInButton,
  errorForm,
};
