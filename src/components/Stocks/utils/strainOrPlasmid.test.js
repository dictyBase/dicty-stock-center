import strainOrPlasmid from "./strainOrPlasmid"

describe("return value", () => {
  it("should return strain for DBS ID", () => {
    expect(strainOrPlasmid("DBS123456")).toBe("strains")
  })
  it("should return plasmid for DBP ID", () => {
    expect(strainOrPlasmid("DBP123456")).toBe("plasmids")
  })
})
