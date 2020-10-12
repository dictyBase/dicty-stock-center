import { pageTitleLookup } from "./convertPageTitles"

describe("common/utils/convertPageTitles", () => {
  it("should return correct value for matching key", () => {
    expect(pageTitleLookup("order")).toBe("Order Information")
  })
  it("should return generic title for missing key", () => {
    expect(pageTitleLookup("sports")).toBe("Information Page")
  })
})
