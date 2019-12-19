// @flow
import React, { createContext, useContext, useReducer } from "react"
import { cartTypes } from "constants/cart"

const storageKey = "dscCart"

const CartContext: Object = createContext()

const initialState = {
  addedItems: JSON.parse(localStorage.getItem(storageKey) || "[]"),
  showCartDialog: false,
  maxItemsInCart: false,
}

type CartItem = {
  id: string,
  name: string,
  summary: string,
  type: string,
}

const cartReducer = (
  state: Object,
  action: {
    type: string,
    payload: {
      ...CartItem,
      fee: string,
      removeIndex: number, // used to remove item
    },
  },
) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      const newItems = state.addedItems.concat({
        id: action.payload.id,
        name: action.payload.name,
        summary: action.payload.summary,
        fee: action.payload.fee,
      })
      if (newItems.length > 12) {
        return {
          ...state,
          maxItemsInCart: true,
        }
      }
      localStorage.setItem(storageKey, JSON.stringify(newItems))
      return {
        addedItems: newItems,
        showCartDialog: true,
        maxItemsInCart: false,
      }
    case cartTypes.REMOVE_FROM_CART:
      const updatedItems = [
        ...state.addedItems.slice(0, action.payload.removeIndex),
        ...state.addedItems.slice(action.payload.removeIndex + 1),
      ]
      localStorage.setItem(storageKey, JSON.stringify(updatedItems))
      return {
        addedItems: updatedItems,
      }
    case cartTypes.HIDE_CART_DIALOG:
      return {
        ...state,
        showCartDialog: false,
      }
    default:
      return state
  }
}

/**
 * CartProvider contains global state used for the shopping cart.
 */

const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}

const useCartStore = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartStore must be used within a CartProvider")
  }
  return context
}

export { CartContext, cartReducer, CartProvider, useCartStore }
