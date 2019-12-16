// @flow
import React, { createContext, useContext, useReducer } from "react"
import { cartTypes } from "constants/cart"
import { fees } from "constants/fees"

const { ADD_TO_CART, REMOVE_FROM_CART } = cartTypes
const { STRAIN_FEE, PLASMID_FEE, OTHER_FEE } = fees

const getFee = item => {
  switch (item) {
    case "strain":
      return STRAIN_FEE
    case "plasmid":
      return PLASMID_FEE
    default:
      return OTHER_FEE
  }
}

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

const useCartStore = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartStore must be used within a CartProvider")
  }
  return context
}

const addToCart = (dispatch, item) =>
  // must pass dispatch manually since this is a helper function, not a
  // React component or custom hook
  dispatch({
    type: ADD_TO_CART,
    payload: {
      fee: getFee(item.type),
      item,
    },
  })

const removeFromCart = (dispatch, addedItems, id) =>
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      removeIndex: addedItems.map(item => item.id).indexOf(id),
    },
  })

export {
  CartContext,
  cartReducer,
  CartProvider,
  useCartStore,
  addToCart,
  removeFromCart,
}
