import characterConverter from "./characterConverter"

describe("common/utils/characterConverter", () => {
  it("should convert numeric HTML entity", () => {
    expect(characterConverter("&#947;")).toEqual("γ")
  })
  it("should convert gamma HTML entity", () => {
    expect(characterConverter("&gamma;")).toEqual("γ")
  })
})
