import itemIsInCart from "./itemIsInCart"

describe("utils/itemIsInCart", () => {
  const addedItems = [{ id: "sein123", name: "jerry", summary: "comedian" }]
  it("should return true for matching item", () => {
    expect(itemIsInCart(addedItems, "sein123")).toBe(true)
  })
  it("should return false for missing item", () => {
    expect(itemIsInCart(addedItems, "kramer")).toBe(false)
  })
})
