import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"

type CartData = {
  /** Stock ID */
  id: string
  /** Name/label of stock */
  name: string
  /** Summary of stock */
  summary: string
  /** Stock inventory status */
  in_stock: boolean
}

/**
 * useCheckboxes is a hook for handling checkbox state.
 */

const useCheckboxes = (cartData: CartData) => {
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
  const itemIsChecked = checkedItems.some(
    (item: CartData) => item.id === cartData.id,
  )

  const handleCheckboxChange = () => {
    // if checkbox is already checked, remove that item from state
    if (itemIsChecked) {
      dispatch({
        type: CatalogActionType.SET_CHECKED_ITEMS,
        payload: checkedItems.filter(
          (item: CartData) => item.id !== cartData.id,
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
