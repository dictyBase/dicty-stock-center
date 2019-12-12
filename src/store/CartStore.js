// @flow
import React, { createContext, useContext, useReducer } from "react"
import { cartTypes } from "constants/cart"

const CartContext: Object = createContext()

const initialState = {
  addedItems: [],
}

const cartReducer = (state: Object, action: Object) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        addedItems: [
          ...state.addedItems,
          {
            id: action.payload.item.id,
            name: action.payload.item.name,
            summary: action.payload.item.summary,
            fee: action.payload.fee,
          },
        ],
      }
    case cartTypes.REMOVE_FROM_CART:
      return {
        addedItems: [
          ...state.addedItems.slice(0, action.payload.removeIndex),
          ...state.addedItems.slice(action.payload.removeIndex + 1),
        ],
      }
    // add modal here
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

const useCartStore = () => useContext(CartContext)

export { CartContext, cartReducer, CartProvider, useCartStore }
