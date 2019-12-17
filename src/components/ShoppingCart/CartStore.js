// @flow
import React, { createContext, useContext, useReducer } from "react"
import { cartTypes } from "constants/cart"
import { fees } from "constants/fees"

const { ADD_TO_CART, REMOVE_FROM_CART } = cartTypes
const { STRAIN_FEE, PLASMID_FEE, OTHER_FEE } = fees

const storageKey = "dscCart"

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
      item: CartItem,
      fee: string,
      id: string, // used to remove item
    },
  },
) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      const newItems = state.addedItems.concat({
        id: action.payload.item.id,
        name: action.payload.item.name,
        summary: action.payload.item.summary,
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

const addToCart = (dispatch: Function, item: CartItem) =>
  // must pass dispatch manually since this is a helper function, not a
  // React component or custom hook
  dispatch({
    type: ADD_TO_CART,
    payload: {
      fee: getFee(item.type),
      item,
    },
  })

const removeFromCart = (
  dispatch: Function,
  addedItems: Array<CartItem>,
  id: string,
) =>
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
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
