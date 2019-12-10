// @flow
import { useSelector } from "react-redux"
import { useCatalogStore } from "components/Stocks/Catalogs/common/CatalogContext"
import { catalogTypes } from "constants/catalogs"

type cartDataType = {
  /** Stock ID */
  id: string,
  /** Name/label of stock */
  name: string,
  /** Summary of stock */
  summary: string,
}

/**
 * useCheckboxes is a hook for handling checkbox state.
 */

const useCheckboxes = (cartData: cartDataType) => {
  const [{ checkedItems }, dispatch] = useCatalogStore()
  const cartItems = useSelector(state => state.cart.addedItems)

  // if item is checked, then return true for checkbox
  const checkedItemsLookup = (id: string) =>
    checkedItems.some(item => item.id === cartData.id)

  // check if hovered item is already in cart
  const selectedCartItems = cartItems.some(item => item.id === cartData.id)

  const handleCheckboxChange = () => {
    // if checkbox is already checked, remove that item from state
    if (checkedItems.some(item => item.id === cartData.id)) {
      dispatch({
        type: catalogTypes.SET_CHECKED_ITEMS,
        payload: checkedItems.filter(item => item.id !== cartData.id),
      })
    } else {
      dispatch({
        type: catalogTypes.SET_CHECKED_ITEMS,
        payload: [...checkedItems, cartData],
      })
    }
  }

  return { checkedItemsLookup, selectedCartItems, handleCheckboxChange }
}

export default useCheckboxes
