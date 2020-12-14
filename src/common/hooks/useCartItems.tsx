import { useCartStore, CartActionType } from "features/ShoppingCart/CartStore"
import { fees } from "common/constants/fees"
import strainOrPlasmid from "common/utils/strainOrPlasmid"
import { CartItem } from "common/types"

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
        payload: {
          fee: getFee(strainOrPlasmid(item.id)),
          type: strainOrPlasmid(item.id) as any,
          id: item.id,
          name: item.name,
          summary: item.summary,
        },
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

export { getFee }
export default useCartItems
