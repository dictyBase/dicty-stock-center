import React from "react"
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import useCartItems from "common/hooks/useCartItems"
import { useCartStore } from "features/ShoppingCart/CartStore"
import { theme } from "app/layout/AppProviders"

const useStyles = makeStyles(({ palette }) => ({
  container: {
    paddingRight: "5px",
  },
  quantity: {
    marginRight: "10px",
    minWidth: 60,
  },
  maxItems: {
    color: palette.error.main,
    "&:hover": {
      color: palette.error.dark,
    },
  },
}))

const newTheme = createMuiTheme({
  ...theme,
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: "6px 0px 7px 0px",
        textAlign: "center",
      },
    },
  },
})

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
  const classes = useStyles()

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
    <MuiThemeProvider theme={newTheme}>
      <FormControl className={classes.quantity} variant="outlined">
        <Select
          labelId="quantity-select-label"
          id="quantity-select"
          value={matchingItems.length}
          onChange={handleChange}>
          {values.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </MuiThemeProvider>
  )
}

export { getDropdownValues }
export default QuantityDropdown
