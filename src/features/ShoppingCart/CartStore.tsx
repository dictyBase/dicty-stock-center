import React, { createContext, useContext, useReducer } from "react"

const storageKey = "dscCart"
const maxKey = "dscMaxItems"

enum CartActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  EMPTY_CART = "EMPTY_CART",
  HIDE_CART_DIALOG = "HIDE_CART_DIALOG",
  GET_ITEMS_FROM_STORAGE = "GET_ITEMS_FROM_STORAGE",
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
      type: CartActionType.EMPTY_CART
    }
  | {
      type: CartActionType.HIDE_CART_DIALOG
    }
  | {
      type: CartActionType.GET_ITEMS_FROM_STORAGE
    }

type CartState = {
  addedItems: Array<CartItem>
  showCartDialog: boolean
  maxItemsInCart: boolean
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
        localStorage.setItem(maxKey, "true")
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
      localStorage.setItem(maxKey, "false")
      return {
        addedItems: updatedItems,
        maxItemsInCart: false,
        showCartDialog: false,
      }
    case CartActionType.EMPTY_CART:
      localStorage.setItem(storageKey, "[]")
      localStorage.setItem(maxKey, "false")
      return {
        addedItems: [],
        maxItemsInCart: false,
        showCartDialog: false,
      }
    case CartActionType.HIDE_CART_DIALOG:
      return {
        ...state,
        showCartDialog: false,
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

export { CartContext, cartReducer, CartProvider, useCartStore, CartActionType }
