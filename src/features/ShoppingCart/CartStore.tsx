import React, { createContext, useContext, useReducer } from "react"
import { CartItemWithFee } from "common/types"

const storageKey = "dscCart"
const maxKey = "dscMaxItems"

enum CartActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  EMPTY_CART = "EMPTY_CART",
  GET_ITEMS_FROM_STORAGE = "GET_ITEMS_FROM_STORAGE",
}

type Action =
  | {
      type: CartActionType.ADD_TO_CART
      payload: CartItemWithFee
    }
  | {
      type: CartActionType.REMOVE_FROM_CART
      payload: {
        removeIndex: number
      }
    }
  | {
      type: CartActionType.EMPTY_CART
    }
  | {
      type: CartActionType.GET_ITEMS_FROM_STORAGE
    }

type CartState = {
  addedItems: Array<CartItemWithFee>
  maxItemsInCart: boolean
}

type CartStateContextProps = {
  state: CartState
  dispatch: React.Dispatch<Action>
}

const CartContext = createContext({} as CartStateContextProps)

const initialState = {
  addedItems: JSON.parse(localStorage.getItem(storageKey) || "[]"),
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
        localStorage.setItem(maxKey, "true")
        return {
          addedItems: newItems,
          maxItemsInCart: true,
        }
      }
      return {
        addedItems: newItems,
        maxItemsInCart: false,
      }
    case CartActionType.REMOVE_FROM_CART:
      const updatedItems = [
        ...state.addedItems.slice(0, action.payload.removeIndex),
        ...state.addedItems.slice(action.payload.removeIndex + 1),
      ]
      localStorage.setItem(storageKey, JSON.stringify(updatedItems))
      localStorage.setItem(maxKey, "false")
      return {
        addedItems: updatedItems,
        maxItemsInCart: false,
      }
    case CartActionType.EMPTY_CART:
      localStorage.setItem(storageKey, "[]")
      localStorage.setItem(maxKey, "false")
      return {
        addedItems: [],
        maxItemsInCart: false,
      }
    case CartActionType.GET_ITEMS_FROM_STORAGE:
      const latestItems = localStorage.getItem(storageKey) || "[]"
      return {
        ...state,
        addedItems: JSON.parse(latestItems),
      }
    default:
      return state
  }
}

/**
 * CartProvider contains global state used for the shopping cart.
 */

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
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
