import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import { CartItem } from "common/types"

interface CartItemWithStatus extends CartItem {
  in_stock: boolean
}

/**
 * useCheckboxes is a hook for handling checkbox state.
 */

const useCheckboxes = () => {
  const {
    state: { checkedItems },
    dispatch,
  } = useCatalogStore()

  const resetCheckedItems = () =>
    dispatch({
      type: CatalogActionType.SET_CHECKED_ITEMS,
      payload: [],
    })

  const handleCheckAllChange = () => {
    if (checkedItems.length > 0) {
      resetCheckedItems()
    }
  }

  // if item is checked, then return true for checkbox
  const itemIsChecked = (cartData: CartItemWithStatus) =>
    checkedItems.some((item: CartItemWithStatus) => item.id === cartData.id)

  const handleCheckboxChange = (cartData: CartItemWithStatus) => {
    // if checkbox is already checked, remove that item from state
    if (itemIsChecked(cartData)) {
      dispatch({
        type: CatalogActionType.SET_CHECKED_ITEMS,
        payload: checkedItems.filter(
          (item: CartItemWithStatus) => item.id !== cartData.id,
        ),
      })
    } else {
      dispatch({
        type: CatalogActionType.SET_CHECKED_ITEMS,
        payload: [...checkedItems, cartData],
      })
    }
  }

  return {
    itemIsChecked,
    handleCheckboxChange,
    resetCheckedItems,
    handleCheckAllChange,
  }
}

export default useCheckboxes
