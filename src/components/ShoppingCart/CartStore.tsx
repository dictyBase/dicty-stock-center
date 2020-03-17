import React, { createContext, useContext, useReducer } from "react"

const storageKey = "dscCart"
const maxKey = "dscMaxItems"

enum CartActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  HIDE_CART_DIALOG = "HIDE_CART_DIALOG",
}

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

type Action =
  | {
      type: CartActionType.ADD_TO_CART
      payload: CartItem
    }
  | {
      type: CartActionType.REMOVE_FROM_CART
      payload: {
        removeIndex: number
      }
    }
  | {
      type: CartActionType.HIDE_CART_DIALOG
    }

type CartState = {
  addedItems: Array<CartItem>
  showCartDialog: boolean
  maxItemsInCart: string
}

const CartContext = createContext({} as any)

const initialState = {
  addedItems: JSON.parse(localStorage.getItem(storageKey) || "[]"),
  showCartDialog: false,
  maxItemsInCart: JSON.parse(localStorage.getItem(maxKey) || "false"),
}

const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART:
      const newItems = state.addedItems
        .concat({
          id: action.payload.id,
          name: action.payload.name,
          summary: action.payload.summary,
          fee: action.payload.fee,
          type: action.payload.type,
        })
        .slice(0, 12)
      localStorage.setItem(storageKey, JSON.stringify(newItems))
      if (newItems.length === 12) {
        localStorage.setItem(maxKey, JSON.stringify(true))
        return {
          addedItems: newItems,
          showCartDialog: true,
          maxItemsInCart: true,
        }
      }
      return {
        addedItems: newItems,
        showCartDialog: true,
        maxItemsInCart: false,
      }
    case CartActionType.REMOVE_FROM_CART:
      const updatedItems = [
        ...state.addedItems.slice(0, action.payload.removeIndex),
        ...state.addedItems.slice(action.payload.removeIndex + 1),
      ]
      localStorage.setItem(storageKey, JSON.stringify(updatedItems))
      localStorage.setItem(maxKey, JSON.stringify(false))
      return {
        addedItems: updatedItems,
        maxItemsInCart: false,
        showCartDialog: false,
      }
    case CartActionType.HIDE_CART_DIALOG:
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
  // @ts-ignore
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

export { CartContext, cartReducer, CartProvider, useCartStore, CartActionType }
