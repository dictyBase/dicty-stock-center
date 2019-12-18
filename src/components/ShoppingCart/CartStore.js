// @flow
import React, { createContext, useContext, useReducer } from "react"
import { cartTypes } from "constants/cart"

const storageKey = "dscCart"

const CartContext: Object = createContext()

const initialState = {
  addedItems: JSON.parse(localStorage.getItem(storageKey) || "[]"),
  showCartDialog: false,
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
      id: string, // used to remove item
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
      localStorage.setItem(storageKey, JSON.stringify(newItems))
      return {
        addedItems: newItems,
        showCartDialog: true,
      }
    case cartTypes.REMOVE_FROM_CART:
      const updatedItems = [
        ...state.addedItems.filter(item => item.id !== action.payload.id),
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
