import { countryToFlag } from "./CountryDropdown"

describe("OrderForm/countryToFlag", () => {
  it("should return expected string", () => {
    expect(countryToFlag("IS")).toBe("🇮🇸")
  })
  it("should return isoCode if String.fromCodePoint is invalid", () => {
    // @ts-ignore
    global.String.fromCodePoint = undefined
    expect(countryToFlag("IS")).toBe("IS")
  })
})
