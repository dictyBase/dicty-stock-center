import { useCartStore, CartActionType } from "features/ShoppingCart/CartStore"
import { CartItem } from "common/types"

/**
 * useCartItems is a hook for manipulating cart items and providing
 * helper methods for them.
 */

const useCartItems = () => {
  const {
    state: { addedItems },
    dispatch,
  } = useCartStore()

  const addToCart = (items: Array<CartItem>) =>
    items.forEach((item) =>
      dispatch({
        type: CartActionType.ADD_TO_CART,
        payload: item,
      }),
    )

  const removeFromCart = (items: Array<CartItem>) =>
    items.forEach((item) =>
      dispatch({
        type: CartActionType.REMOVE_FROM_CART,
        payload: {
          // get new array of IDs then grab first index
          removeIndex: addedItems
            .map((item: CartItem) => item.id)
            .indexOf(item.id),
        },
      }),
    )

  const emptyCart = () => {
    dispatch({ type: CartActionType.EMPTY_CART })
  }

  const getItemsFromStorage = () => {
    dispatch({ type: CartActionType.GET_ITEMS_FROM_STORAGE })
  }

  return { addToCart, removeFromCart, emptyCart, getItemsFromStorage }
}

export default useCartItems
