import { useCartStore, CartActionType } from "components/ShoppingCart/CartStore"
import { fees } from "constants/fees"
import strainOrPlasmid from "utils/strainOrPlasmid"

const { STRAIN_FEE, PLASMID_FEE, OTHER_FEE } = fees

const getFee = (item: string) => {
  switch (item) {
    case "strains":
      return STRAIN_FEE
    case "plasmids":
      return PLASMID_FEE
    default:
      return OTHER_FEE
  }
}

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
}

/**
 * useCartItems is a hook for manipulating cart items and providing
 * helper methods for them.
 */

const useCartItems = (items: Array<CartItem>) => {
  const [{ addedItems }, dispatch] = useCartStore()

  const addToCart = () =>
    items.forEach(item =>
      dispatch({
        type: CartActionType.ADD_TO_CART,
        payload: {
          fee: getFee(strainOrPlasmid(item.id)),
          type: strainOrPlasmid(item.id),
          id: item.id,
          name: item.name,
          summary: item.summary,
        },
      }),
    )

  const removeFromCart = () =>
    items.forEach(item =>
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

  // check if item is already in cart
  const itemIsInCart = addedItems.some(
    (stock: CartItem) => stock.id === items[0].id,
  )

  return { addToCart, removeFromCart, emptyCart, itemIsInCart }
}

export { getFee }
export default useCartItems
