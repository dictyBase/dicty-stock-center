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
    type: "strain",
  }

  it("should add a new item to cart", () => {
    const state = {
      addedItems: [],
      showCartDialog: false,
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
      showCartDialog: true,
      maxItemsInCart: false,
    })
  })

  it("should not add a new item to cart when full", () => {
    const items = new Array(12).fill(newItem)
    const state = {
      addedItems: items,
      showCartDialog: false,
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
      addedItems: items,
      showCartDialog: true,
      maxItemsInCart: true,
    })
    expect(localStorage.setItem).toBeCalledWith(maxKey, "true")
  })

  it("should remove an item from cart", () => {
    const state = {
      addedItems: [
        {
          ...newItem,
          fee: "30.00",
        },
      ],
      showCartDialog: false,
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
      showCartDialog: false,
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
      showCartDialog: false,
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.EMPTY_CART,
      }),
    ).toStrictEqual({
      addedItems: [],
      maxItemsInCart: false,
      showCartDialog: false,
    })
    expect(localStorage.setItem).toBeCalledWith(storageKey, "[]")
    expect(localStorage.setItem).toBeCalledWith(maxKey, "false")
  })

  it("should hide cart dialog", () => {
    const state = {
      addedItems: [],
      showCartDialog: true,
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.HIDE_CART_DIALOG,
      }),
    ).toStrictEqual({
      addedItems: [],
      showCartDialog: false,
      maxItemsInCart: false,
    })
  })

  it("should get items from local storage", () => {
    const state = {
      addedItems: [],
      showCartDialog: false,
      maxItemsInCart: false,
    }
    expect(
      cartReducer(state, {
        type: CartActionType.GET_ITEMS_FROM_STORAGE,
      }),
    ).toStrictEqual({
      addedItems: [],
      showCartDialog: false,
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
