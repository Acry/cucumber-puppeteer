const { Given, When, Then, After, Before, setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);

Before(async function() {
  return await this.openLoginPage();
});
After(async function() {
  return await this.closeGitHub();
});
Given('I am on GitHib.', async function () {
  return await this.checkLoginPage();
});
When('I fill in my name,', async function () {
  return await this.enterName();
});
When('I fill in my password,', async function () {
  return await this.enterPassword();
});
When('I press the login button,', async function () {
  return await this.pressLogin();
});
Then('I should be logged in.', async function () {
  return await this.checkStatus();
});