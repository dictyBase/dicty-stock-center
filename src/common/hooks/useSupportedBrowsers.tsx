import Bowser from "bowser"

/**
 * useSupportedBrowsers returns a boolean indicating if the user's current
 * browser and version are supported by our application.
 */
const useSupportedBrowsers = () => {
  const browser = Bowser.getParser(window.navigator.userAgent)
  const name = browser.getBrowserName()
  const version = Number(browser.getBrowserVersion())
  const chromeVersion = Number(browser.getBrowserVersion().slice(0, 2))

  let supportedBrowser = true
  if (name === "Internet Explorer") {
    supportedBrowser = false
  }

  if (name === "Firefox" && version < 62) {
    supportedBrowser = false
  }

  if (name === "Chrome" && chromeVersion < 69) {
    supportedBrowser = false
  }

  if (name === "Safari" && version < 12) {
    supportedBrowser = false
  }

  return {
    name,
    version,
    supportedBrowser,
  }
}

export default useSupportedBrowsers
