import { getDropdownValues } from "./useCartQuantity"

describe("getDropdownValues function", () => {
  it("should return 1-12 for item with 6 quantity and 6 items in cart", () => {
    expect(getDropdownValues(6, 6)).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
    ])
  })
  it("should return 1-5 for item with 4 quantity and 11 items in cart", () => {
    expect(getDropdownValues(11, 4)).toStrictEqual([1, 2, 3, 4, 5])
  })
  it("should return 1-5 for item with 1 quantity and 8 items in cart", () => {
    expect(getDropdownValues(8, 1)).toStrictEqual([1, 2, 3, 4, 5])
  })
  it("should return 1 for item with 1 quantity and 12 items in cart", () => {
    expect(getDropdownValues(12, 1)).toStrictEqual([1])
  })
  it("should return 1-2 for item with 1 quantity and 11 items in cart", () => {
    expect(getDropdownValues(11, 1)).toStrictEqual([1, 2])
  })
})
