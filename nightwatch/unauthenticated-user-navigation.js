module.exports = {
  "browse information pages": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("h1", 1000)
      .click('a[href="/information/orders"]')
      .waitForElementVisible("div", 1000)
      .getText("h1", function(res) {
        this.assert.equal(res.value, "Ordering Information")
      })
    browser.assert.urlContains("information/orders")
  },
  close: browser => {}
}
