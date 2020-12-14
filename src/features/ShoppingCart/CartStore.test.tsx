// import React from "react"
// import { renderHook } from "@testing-library/react-hooks"
import { cartReducer, CartActionType } from "./CartStore"

const storageKey = "dscCart"
const maxKey = "dscMaxItems"

describe("cartReducer", () => {
  jest.spyOn(window.localStorage.__proto__, "setItem")
  localStorage.setItem = jest.fn()
  jest.spyOn(window.localStorage.__proto__, "getItem")
  localStorage.getItem = jest.fn()

  const newItem = {
    id: "DBS1234567",
    name: "Test Strain",
    summary: "this is just a test summary",
    type: "strain" as const,
  }

  it("should add a new item to cart", () => {
    const state = {
      addedItems: [],
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.ADD_TO_CART,
        payload: {
          ...newItem,
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
      maxItemsInCart: false,
    })
  })

  it("should not add a new item to cart when full", () => {
    const items = new Array(12).fill(newItem)
    const state = {
      addedItems: items,
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.ADD_TO_CART,
        payload: {
          ...newItem,
          type: "strain",
          fee: "30.00",
        },
      }),
    ).toStrictEqual({
      addedItems: items,
      maxItemsInCart: true,
    })
    expect(localStorage.setItem).toBeCalledWith(maxKey, "true")
  })

  it("should remove an item from cart", () => {
    const state = {
      addedItems: [
        {
          ...newItem,
          type: "strain" as const,
          fee: "30.00",
        },
      ],
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.REMOVE_FROM_CART,
        payload: {
          removeIndex: 0,
        },
      }),
    ).toStrictEqual({
      addedItems: [],
      maxItemsInCart: false,
    })
    expect(localStorage.setItem).toBeCalledWith(storageKey, "[]")
    expect(localStorage.setItem).toBeCalledWith(maxKey, "false")
  })

  it("should empty entire cart", () => {
    const state = {
      addedItems: [
        {
          ...newItem,
          fee: "30.00",
        },
        {
          ...newItem,
          fee: "30.00",
        },
        {
          ...newItem,
          fee: "30.00",
        },
      ],
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.EMPTY_CART,
      }),
    ).toStrictEqual({
      addedItems: [],
      maxItemsInCart: false,
    })
    expect(localStorage.setItem).toBeCalledWith(storageKey, "[]")
    expect(localStorage.setItem).toBeCalledWith(maxKey, "false")
  })

  it("should get items from local storage", () => {
    const state = {
      addedItems: [],

      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.GET_ITEMS_FROM_STORAGE,
      }),
    ).toStrictEqual({
      addedItems: [],
      maxItemsInCart: false,
    })
    expect(localStorage.getItem).toBeCalledWith(storageKey)
    expect(localStorage.setItem).toBeCalledWith(maxKey, "false")
  })
})

// describe("useCartStore", () => {
//   it("should throw error if not used in Provider", () => {
//     const wrapper = ({ children }) => <div>{children}</div>
//     const { result } = renderHook(() => useCartStore(), { wrapper })
//     expect(() => result.current).toThrow()
//   })
// })
