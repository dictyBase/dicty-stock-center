import characterConverter from "./characterConverter"

describe("common/utils/characterConverter", () => {
  it("should convert numeric HTML entity", () => {
    expect(characterConverter("&#947;")).toBe("γ")
  })
  it("should convert gamma HTML entity", () => {
    expect(characterConverter("&gamma;")).toBe("γ")
  })
})
