import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "./AddToCartButton"
import useCheckboxes from "common/hooks/useCheckboxes"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import { useCartStore } from "features/ShoppingCart/CartStore"
import { CartItem } from "common/types"

interface CartItemWithStatus extends CartItem {
  in_stock: boolean
}

const useStyles = makeStyles(({ palette }) => ({
  button: {
    color: palette.primary.main,
  },
}))

/**
 * CatalogListHeaderButtons contains the list of headers (i.e.
 * descriptor, summary, etc) at the top of the catalog page.
 */

const CatalogListHeaderButtons = () => {
  const {
    state: { addedItems },
  } = useCartStore()
  const {
    state: { checkedItems },
  } = useCatalogStore()
  const { resetCheckedItems } = useCheckboxes()
  const classes = useStyles()
  const checkedItemsLength = checkedItems.length

  let cartButtonDisplay = true
  const maxItems = addedItems.length + checkedItemsLength > 12
  const includesUnavailableStocks = checkedItems.some(
    (item: CartItemWithStatus) => item.in_stock === false,
  )

  if (maxItems || includesUnavailableStocks) {
    cartButtonDisplay = false
  }

  return (
    <span>
      {checkedItemsLength} items selected
      {cartButtonDisplay && (
        <AddToCartButton
          data={checkedItems}
          setCheckedItems={resetCheckedItems}
          inStock={true}
        />
      )}
      <IconButton
        size="medium"
        className={classes.button}
        onClick={() => {}}
        title="Download PDF"
        aria-label="Download PDF">
        <FontAwesomeIcon icon="download" />
      </IconButton>
    </span>
  )
}

export default CatalogListHeaderButtons
