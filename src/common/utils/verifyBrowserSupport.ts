/**
 * verifyBrowserSupport returns a boolean indicating if the user's current
 * browser and version match our supported versions.
 */
const verifyBrowserSupport = ( name: string, version: string) => {
  const numVersion = Number(version)
  // Chrome versions are in the format of 87.0.4280.141
  // so we just need the first two numbers
  const chromeVersion = version.slice(0, 2)

  const ie = name === "Internet Explorer"
  const firefox = name === "Firefox" && numVersion < 62
  const safari = name === "Safari" && numVersion < 12
  const chrome = name === "Chrome" && Number(chromeVersion) < 69
  const oldBrowsers = ie || firefox || safari || chrome

  return !oldBrowsers
}

export default verifyBrowserSupport
