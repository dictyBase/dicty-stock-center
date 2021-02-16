import getDepositorName from "./getDepositorName"

describe("features/Stocks/Details/utils/getDepositorName", () => {
  it("should return full name", () => {
    const depositor = {
      first_name: "Jackie",
      last_name: "Chiles",
    }
    expect(getDepositorName(depositor)).toEqual("Jackie Chiles")
  })

  it("should return empty string", () => {
    expect(getDepositorName({})).toEqual("")
  })
})
