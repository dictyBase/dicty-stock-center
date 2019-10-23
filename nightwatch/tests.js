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

const date = new Date().toJSON().slice(0, 10)

const test = (browser, url, page) => {
  browser.url(url).waitForElementVisible("body", 1000)
  viewports.forEach(item => {
    browser
      .resizeWindow(item.width, 2000)
      .saveScreenshot(
        `./nightwatch/reports/dsc-${page}-${item.name}-chrome-${date}.png`,
      )
  })
  browser.end()
}

module.exports = {
  "inspect homepage": browser => {
    test(browser, "https://eric.dictybase.dev/stockcenter", "homepage")
  },
  "inspect information page": browser => {
    test(
      browser,
      "https://eric.dictybase.dev/stockcenter/information/order",
      "infopage",
    )
  },
  "inspect login page": browser => {
    test(browser, "https://eric.dictybase.dev/stockcenter/login", "login")
  },
}
