import { getFee } from "./useCartItems"

describe("getFee function", () => {
  it("should return correct fee for strains", () => {
    expect(getFee("strains")).toEqual("30.00")
  })
  it("should return correct fee for plasmids", () => {
    expect(getFee("plasmids")).toEqual("15.00")
  })
  it("should return correct fee for other materials", () => {
    expect(getFee("xyz")).toEqual("40.00")
  })
})
