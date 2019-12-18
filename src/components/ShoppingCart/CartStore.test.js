import React from "react"
import { renderHook } from "react-hooks-testing-library"
import { cartReducer, useCartStore, getFee } from "./CartStore"
import { cartTypes } from "constants/cart"

describe("cartReducer", () => {
  const newItem = {
    id: "DBS1234567",
    name: "Test Strain",
    summary: "this is just a test summary",
  }
  it("should add a new item to cart", () => {
    const state = {
      addedItems: [],
      showCartDialog: false,
    }
    expect(
      cartReducer(state, {
        type: cartTypes.ADD_TO_CART,
        payload: {
          item: newItem,
          fee: "30.00",
        },
      }),
    ).toStrictEqual({
      addedItems: [
        {
          ...newItem,
          fee: "30.00",
        },
      ],
      showCartDialog: true,
    })
  })
  it("should remove an item from cart", () => {
    const state = {
      addedItems: [newItem],
      showCartDialog: false,
    }
    expect(
      cartReducer(state, {
        type: cartTypes.REMOVE_FROM_CART,
        payload: {
          id: newItem.id,
        },
      }),
    ).toStrictEqual({
      addedItems: [],
    })
  })
  it("should hide cart dialog", () => {
    const state = {
      addedItems: [],
      showCartDialog: true,
    }
    expect(
      cartReducer(state, {
        type: cartTypes.HIDE_CART_DIALOG,
      }),
    ).toStrictEqual({
      addedItems: [],
      showCartDialog: false,
    })
  })
})

describe("useCartStore", () => {
  it("should throw error if not used in Provider", () => {
    const wrapper = ({ children }) => <div>{children}</div>
    const { result } = renderHook(() => useCartStore(), { wrapper })
    expect(() => result.current).toThrow()
  })
})

describe("getFee function", () => {
  it("should return correct fee for strain", () => {
    expect(getFee("strain")).toEqual("30.00")
  })
  it("should return correct fee for plasmid", () => {
    expect(getFee("plasmid")).toEqual("15.00")
  })
  it("should return correct fee for other materials", () => {
    expect(getFee("xyz")).toEqual("40.00")
  })
})
