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
    browser.assert.urlContains("login")
  },

  // "logging in": browser => {
  //   browser
  //     // click ORCID button
  //     .click("button[type=button]")
  //   browser
  //     // switch to new window
  //     .window_handles(function(result) {
  //       var handle = result.value[1]
  //       browser.switchWindow(handle)
  //     })
  //     // wait for new window to load
  //     .waitForElementVisible("p", 2000)
  //     .getText("p", function(res) {
  //       this.assert.equal(res.value, "Sign into ORCID or Register now")
  //     })
  //     .setValue("input[id=userId]", "test@test.com")
  //     .setValue("input[id=password]", "testtest")
  //     .click("button[type=submit]")
  // },
  //   "logging out": browser => {
  //     browser
  //       // Find and click on the logout link
  //       .click('a[href="/logout"]')
  //       // We'll wait for the next content to load
  //       .waitForElementVisible("h1", 1000)
  //       // Get the text of the h1 tag
  //       .getText("h1", function(res) {
  //         this.assert.equal(res.value, "Welcome to Dicty Stock Center (DSC)")
  //       })
  //       // Make sure the Login button shows now
  //       .waitForElementVisible('a[href="/login"]', 1000)
  //   },
  close: browser => {},
}
