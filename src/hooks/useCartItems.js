// @flow
import { useCartStore } from "store/CartStore"

/**
 * useCartItems is a hook for handling items currently in the cart.
 */

const useCartItems = (id: string) => {
  const [{ addedItems }] = useCartStore()

  // check if hovered item is already in cart
  const itemIsInCart = addedItems.some(item => item.id === id)

  return { itemIsInCart }
}

export default useCartItems
