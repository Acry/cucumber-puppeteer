const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer-core");
const CREDS = require('./creds');

const PAGE = 'https://github.com/login'
const USERNAME_SELECTOR = '#login_field';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

class LogInWorld {
    constructor() {
      this.login = "";
    }
  async openLoginPage() {
    this.browser = await puppeteer.launch({headless: false, executablePath: '/usr/bin/chromium', slowMo: 25, defaultViewport: null});
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE, {waitUntil: 'networkidle2'});
  }
  async checkLoginPage() {
    const title = await this.page.evaluate(async () => document.getElementsByTagName('H1')[0].textContent);
    // console.log(title);
    expect(title).to.eql('Sign in to GitHub');
  }
  async enterName() {
    await this.page.click(USERNAME_SELECTOR);
    await this.page.keyboard.type(CREDS.username);
  }
  async enterPassword() {
    await this.page.click(PASSWORD_SELECTOR);
    await this.page.keyboard.type(CREDS.password);
  }
  async pressLogin() {
    await this.page.click(BUTTON_SELECTOR);
  }
  async checkStatus() {
    const text = await this.page.evaluate(async () => document.querySelector('body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-lg-flex > details > details-menu > div.header-nav-current-user.css-truncate > a').textContent);
    expect(text).to.eql('Signed in as Acry');
  }
  async closeGitHub() {
    await this.browser.close();
  }
}
setWorldConstructor(LogInWorld);

