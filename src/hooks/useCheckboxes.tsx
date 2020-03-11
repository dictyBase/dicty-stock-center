import { useCatalogStore } from "components/Stocks/Catalogs/common/CatalogContext"
import { catalogTypes } from "constants/catalogs"

type cartDataType = {
  /** Stock ID */
  id: string
  /** Name/label of stock */
  name: string
  /** Summary of stock */
  summary: string
}

/**
 * useCheckboxes is a hook for handling checkbox state.
 */

const useCheckboxes = (cartData: cartDataType) => {
  const [{ checkedItems }, dispatch] = useCatalogStore()

  const resetCheckedItems = () =>
    dispatch({
      type: catalogTypes.SET_CHECKED_ITEMS,
      payload: [],
    })

  const handleCheckAllChange = () => {
    if (checkedItems.length > 0) {
      resetCheckedItems()
    }
  }

  // if item is checked, then return true for checkbox
  const itemIsChecked = checkedItems.some(item => item.id === cartData.id)

  const handleCheckboxChange = () => {
    // if checkbox is already checked, remove that item from state
    if (itemIsChecked) {
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

  return {
    itemIsChecked,
    handleCheckboxChange,
    resetCheckedItems,
    handleCheckAllChange,
  }
}

export default useCheckboxes
