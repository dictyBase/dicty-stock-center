import itemIsInCart from "./itemIsInCart"
import { fees } from "common/constants/fees"

describe("utils/itemIsInCart", () => {
  const addedItems = [
    {
      id: "sein123",
      name: "jerry",
      summary: "comedian",
      fee: fees.STRAIN_FEE,
      quantity: 1,
    },
  ]
  it("should return true for matching item", () => {
    expect(itemIsInCart(addedItems, "sein123")).toBeTruthy()
  })
  it("should return false for missing item", () => {
    expect(itemIsInCart(addedItems, "kramer")).toBeFalsy()
  })
})
