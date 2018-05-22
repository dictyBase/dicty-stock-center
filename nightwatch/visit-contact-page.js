// need to update with form submission

module.exports = {
  "get to contact page": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("h1", 1000)
      .click('a[href="/contact"]')
      .waitForElementVisible("h1", 1000)
      .getText("h1", function(res) {
        this.assert.equal(res.value, "Contact Us")
      })
    browser.assert.urlContains("contact")
  },
  close: browser => {}
}
