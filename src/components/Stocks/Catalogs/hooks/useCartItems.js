// @flow
import { useSelector } from "react-redux"

/**
 * useCartItems is a hook for handling items currently in the cart.
 */

const useCartItems = (id: string) => {
  const cartItems = useSelector(state => state.cart.addedItems)

  // check if hovered item is already in cart
  const itemIsInCart = cartItems.some(item => item.id === id)

  return { itemIsInCart }
}

export default useCartItems
