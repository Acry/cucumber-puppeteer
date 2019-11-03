# Outline
Test a successful login to github with cucumber.<br>
Cheated from:
https://github.com/spirosikmd/cucumber-puppeteer-example

# Setup new project [Optional]

`npm init -y && npm i puppeteer-core cucumber cucumber-html-reporter chai -D`

# Clone

* after cloning cd into
* adjust credentials
* in file `support/world.js` in line 38 search `expect(text).to.eql('Signed in as Acry');` and substitue `Acry` against your name.
* `npm i`
* `run test`
* `run report`
* play around - happy hacking!

# Credentials
`creds.js` in folder `features/support`<br>
```js
module.exports = {
    username: 'Your_name',
    password: 'Your_pw'
}
```

# Todo

Make name a variable.
