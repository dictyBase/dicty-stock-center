import React from "react"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "./AddToCartButton"
import useCheckboxes from "common/hooks/useCheckboxes"
import { useCatalogStore } from "features/Stocks/Catalogs/common/CatalogContext"
import { useCartStore } from "features/ShoppingCart/CartStore"

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#004080",
  },
}))

/**
 * CatalogListHeaderButtons contains the list of headers (i.e.
 * descriptor, summary, etc) at the top of the catalog page.
 */

const CatalogListHeaderButtons = () => {
  const [{ addedItems }] = useCartStore()
  const [{ checkedItems }] = useCatalogStore()
  const { resetCheckedItems } = useCheckboxes({
    id: "",
    name: "",
    summary: "",
  })
  const classes = useStyles()
  const checkedItemsLength = checkedItems.length

  let cartButtonDisplay = true

  if (addedItems.length + checkedItemsLength > 12) {
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
