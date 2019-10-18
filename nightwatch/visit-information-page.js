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
  "inspect information page": browser => {
    browser
      .url("https://eric.dictybase.dev/stockcenter/information/order")
      .waitForElementVisible("body", 1000)
    const date = new Date().toJSON().slice(0, 10)
    viewports.forEach(item => {
      browser
        .resizeWindow(item.width, 2000)
        .saveScreenshot(
          `./nightwatch/reports/dsc-infopage-${item.name}-chrome-${date}.png`,
        )
    })
    browser.end()
  },
}
