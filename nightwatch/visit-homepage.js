module.exports = {
  "inspect homepage": browser => {
    browser
      // Load the page at the launch URL
      .url(browser.launchUrl)
      // wait for page to load
      .waitForElementVisible("body", 1000)
      .assert.title("Dicty Stock Center")
      .getText("h1", function(res) {
        this.assert.equal(res.value, "Welcome to Dicty Stock Center (DSC)")
      })
      .saveScreenshot("./nightwatch/snapshots/homepage-snapshot.png")
      .end()
  },
}
