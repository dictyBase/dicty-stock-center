module.exports = {
  "browse information pages": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible("h1", 1000)
      .click('a[href="/information/orders"]')
    browser.assert
      .urlContains("information/orders")
      .saveScreenshot("./nightwatch/snapshots/info-page-snapshot.png")
      .end()
  },
}
