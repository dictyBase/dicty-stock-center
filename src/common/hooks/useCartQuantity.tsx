import React from "react"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import { maxItemsInCart } from "common/constants/cart"

/**
 * getDropdownValues generates a list of possible numbers based on how
 * many items are in the cart.
 */
const getDropdownValues = (numItemsInCart: number, currentQuantity: number) => {
  /**
   * Process for generating values:
   * 1. Create array of values from 1 to the current number of selected item in
   *    cart (i.e. 1-4)
   * 2. Create array of values from current quantity number (i.e. 4) to the
   *    maximum allowed in cart (12 - 4, which would create an array of 4-8)
   * 3. Merge these arrays
   */
  const arr = []
  for (let i = 1; i < currentQuantity; i++) {
    arr.push(i)
  }

  const secondArr = []
  const availableToAdd = maxItemsInCart - numItemsInCart
  for (let i = currentQuantity; i <= currentQuantity + availableToAdd; i++) {
    secondArr.push(i)
  }

  return arr.concat(secondArr)
}

const useCartQuantity = (id: string) => {
  const {
    state: { addedItems },
  } = useCartStore()
  // get array of all items with given ID
  const matchingItems = addedItems.filter((val) => val.id === id)
  // generate values to display in quantity dropdown
  const values = getDropdownValues(addedItems.length, matchingItems.length)
  const { addToCart, removeFromCart } = useCartItems()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // get quantity from dropdown selection
    const qtyNum = Number(event.target.value)
    // calculate the difference between how many of this item are in the cart and
    // the quantity now selected in the dropdown
    const qtyDiff = qtyNum - matchingItems.length

    // if there's no change in quantity then do nothing
    if (qtyDiff === 0) return
    // negative quantity difference means the user is removing items
    if (qtyDiff < 0) {
      const removableItems = matchingItems.splice(0, Math.abs(qtyDiff))
      removeFromCart(removableItems)
    } else {
      // if positive, generate an array of the same item with new quantity
      // and add those items to the cart
      const addableItems = Array(qtyDiff).fill(matchingItems[0])
      addToCart(addableItems)
    }
  }

  return {
    handleChange,
    matchingItems,
    values,
  }
}

export { getDropdownValues }
export default useCartQuantity
