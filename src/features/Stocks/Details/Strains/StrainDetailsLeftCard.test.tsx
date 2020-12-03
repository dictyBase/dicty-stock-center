import { genotypeFormatter } from "./StrainDetailsLeftCard"

describe("features/Stocks/Details/Strains/StrainDetailsLeftCard", () => {
  describe("genotypeFormatter function", () => {
    // for reference, the drug resistances are:
    // ["neoR", "bsR", "hygR", "tetR", "phleoR", "bleoR"]
    it("should list drug resistances at the end", () => {
      const genotypes = "neoR,abc1,test2,phleoR,costanza"
      expect(genotypeFormatter(genotypes).pop()).toEqual("neoR,phleoR")
    })
  })
})
