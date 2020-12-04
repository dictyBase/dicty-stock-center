import useGenotypes from "./useGenotypes"
import { renderHook } from "@testing-library/react-hooks"

describe("common/hooks/useGenotypes", () => {
  /**
   * Drug resistances are ["neoR", "bsR", "hygR", "tetR", "phleoR", "bleoR"]
   */
  it("should separate drug resistances", () => {
    const genotypes = "neoR,abc1,test2,phleoR,costanza"
    const { result } = renderHook(() => useGenotypes(genotypes))
    expect(result.current.drugResistances).toStrictEqual(["neoR", "phleoR"])
    expect(result.current.nonDrugResistances).toStrictEqual([
      "abc1",
      "test2",
      "costanza",
    ])
  })
})
