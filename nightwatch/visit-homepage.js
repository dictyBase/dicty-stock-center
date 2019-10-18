const viewports = [
  {
    name: "phone",
    width: 360,
  },
  {
    name: "tablet",
    width: 768,
  },
  {
    name: "laptop",
    width: 1024,
  },
  {
    name: "tv",
    width: 1920,
  },
]

module.exports = {
  "inspect homepage": browser => {
    browser
      .url("https://eric.dictybase.dev/stockcenter")
      .waitForElementVisible("body", 1000)
      .assert.title("Dicty Stock Center")
      .getText("h1", function(res) {
        this.assert.equal(res.value, "Welcome to Dicty Stock Center (DSC)")
      })
    const date = new Date().toJSON().slice(0, 10)
    viewports.forEach(item => {
      browser
        .resizeWindow(item.width, 2000)
        .saveScreenshot(
          `./nightwatch/reports/dsc-homepage-${item.name}-chrome-${date}.png`,
        )
    })
    browser.end()
  },
}
