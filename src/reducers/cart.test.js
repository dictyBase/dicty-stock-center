import reducer from "reducers/cart"
import { dsctypes } from "constants/dsctypes"

const { ADD_TO_CART, REMOVE_FROM_CART } = dsctypes

const initialState = {
  addedItems: []
}

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it("should handle ADD_TO_CART", () => {
    expect(
      reducer(initialState, {
        type: ADD_TO_CART,
        item: {
          id: "999"
        }
      })
    ).toEqual({
      addedItems: [
        {
          id: "999"
        }
      ]
    })
  })

  it("should handle REMOVE_FROM_CART", () => {
    const state = {
      addedItems: ["9", "99", "999"]
    }
    const expected = {
      addedItems: ["9", "99"]
    }
    expect(
      reducer(state, {
        type: REMOVE_FROM_CART,
        removeIndex: 2
      })
    ).toEqual(expected)
  })
})
