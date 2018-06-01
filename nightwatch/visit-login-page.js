module.exports = {
  "get to login page": browser => {
    browser
      // Load the page at the launch URL
      .url(browser.launchUrl)
      // wait for page to load
      .waitForElementVisible("h1", 1000)
      // click on the login link
      .click('a[href="/login"]')
      // wait for page to load
      .waitForElementVisible("h1", 1000)
      .getText("h1", function(res) {
        this.assert.equal(res.value, "Log in")
      })
      .getText("button", function(res) {
        this.assert.equal(res.value, "  SIGN IN WITH ORCID")
      })
      .getText("button:nth-of-type(2)", function(res) {
        this.assert.equal(res.value, "  SIGN IN WITH GOOGLE")
      })
      .getText("button:nth-of-type(3)", function(res) {
        this.assert.equal(res.value, "  SIGN IN WITH LINKEDIN")
      })
      .getText("button:nth-of-type(4)", function(res) {
        this.assert.equal(res.value, "  SIGN IN WITH FACEBOOK")
      })
    browser.assert
      .urlContains("login")
      .saveScreenshot("./nightwatch/snapshots/login-snapshot.png")
      .end()
  },
}
