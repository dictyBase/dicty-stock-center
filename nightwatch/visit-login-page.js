module.exports = {
  "inspect homepage": browser => {
    browser
      .url("https://eric.dictybase.dev/stockcenter/login")
      .waitForElementVisible("body", 1000)

    const date = new Date().toJSON().slice(0, 10)
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

    viewports.forEach(item => {
      browser
        .resizeWindow(item.width, 2000)
        .saveScreenshot(
          `./nightwatch/reports/dsc-login-${item.name}-chrome-${date}.png`,
        )
    })

    browser.end()
  },
}
