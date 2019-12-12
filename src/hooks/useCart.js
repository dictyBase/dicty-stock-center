// @flow
import { useCartStore } from "store/CartStore"
import { fees } from "constants/fees"
import { cartTypes } from "constants/cart"

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

/**
 * useCartItems is a hook for handling items currently in the cart.
 */

const useCartItems = (item: Object) => {
  const [{ addedItems }, dispatch] = useCartStore()

  const addToCart = () =>
    dispatch({
      type: ADD_TO_CART,
      payload: {
        fee: getFee(item.type),
        item,
      },
    })

  const removeFromCart = () =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        removeIndex: addedItems.map(item => item.id).indexOf(item.id),
      },
    })

  // check if hovered item is already in cart
  const itemIsInCart = addedItems.some(hovered => hovered.id === item.id)

  return { addToCart, removeFromCart, itemIsInCart }
}

export default useCartItems
