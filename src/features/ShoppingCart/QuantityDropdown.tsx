import React from "react"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import useCartItems from "common/hooks/useCartItems"
import { useCartStore } from "features/ShoppingCart/CartStore"

const getDropdownValues = (numItemsInCart: number, currentQuantity: number) => {
  const availableToAdd = 12 - numItemsInCart
  const arr = []
  for (let i = 1; i <= currentQuantity; i++) {
    arr.push(i)
  }

  const secondArr = []
  for (let i = currentQuantity; i <= currentQuantity + availableToAdd; i++) {
    secondArr.push(i)
  }

  const finalArr = arr.concat(secondArr)

  return finalArr
    .filter((item, index) => finalArr.indexOf(item) === index)
    .filter((x) => x !== 0)
}

type Props = {
  /** Stock ID */
  id: string
}

const QuantityDropdown = ({ id }: Props) => {
  const {
    state: { addedItems },
  } = useCartStore()

  const matchingItems = addedItems.filter((item) => item.id === id)
  const values = getDropdownValues(addedItems.length, matchingItems.length)
  const { addToCart, removeFromCart } = useCartItems()
  const labelRef = React.useRef<HTMLLabelElement>(null)
  const labelWidth = labelRef.current ? labelRef.current.clientWidth : 0

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const qtyNum = Number(event.target.value)
    const qtyDiff = qtyNum - matchingItems.length

    if (qtyDiff === 0) return

    if (qtyDiff < 0) {
      const removableItems = matchingItems.splice(0, Math.abs(qtyDiff))
      removeFromCart(removableItems)
    } else {
      const addableItems = Array(qtyDiff).fill(matchingItems[0])
      addToCart(addableItems)
    }
  }

  return (
    <FormControl variant="outlined">
      <InputLabel ref={labelRef} shrink id="quantity-select-label">
        Quantity
      </InputLabel>
      <Select
        labelId="quantity-select-label"
        id="quantity-select"
        value={matchingItems.length}
        onChange={handleChange}
        input={
          <OutlinedInput
            notched
            name="age"
            id="outlined-age-always-notched"
            margin="dense"
            labelWidth={labelWidth}
          />
        }>
        {values.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export { getDropdownValues }
export default QuantityDropdown
