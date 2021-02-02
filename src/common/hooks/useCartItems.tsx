import { useCartStore, CartActionType } from "features/ShoppingCart/CartStore"
import { CartItem } from "common/types"

/**
 * addQuantityToCartItem creates a map of added items then increases
 * the quantity value for every duplicate item in the cart.
 */
const addQuantityToCartItem = (items: Array<CartItem>) => {
  const itemMap = new Map(
    items.map((item) => [
      item.id,
      {
        ...item,
        quantity: 0,
      },
    ]),
  )
  for (const { id } of items) itemMap.get(id)!.quantity++

  return Array.from(itemMap.values())
}

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

  const getCartTotal = (items: Array<CartItem>) => {
    const total = items
      .map((item: CartItem) => Number(item.fee))
      .reduce((acc, val) => acc + val)
    return `$${total}.00`
  }

  return {
    addToCart,
    removeFromCart,
    emptyCart,
    getItemsFromStorage,
    getCartTotal,
    itemsWithQuantity: addQuantityToCartItem(addedItems),
  }
}

export default useCartItems
