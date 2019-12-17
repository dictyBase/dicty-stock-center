// @flow
import React from "react"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import { green } from "@material-ui/core/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartDialog from "components/Stocks/Catalogs/common/AddToCartDialog"
import { addToCart, useCartStore } from "components/ShoppingCart/CartStore"

const useStyles = makeStyles(theme => ({
  cartButton: {
    color: green[600],
  },
}))

type Props = {
  /** Strain data */
  data: Array<{
    /** Strain ID number */
    id: string,
    /** Strain label (name) */
    name: string,
    /** Strain summary */
    summary: string,
  }>,
  /** Function to add to checked items array */
  setCheckedItems?: Function,
  /** Type of stock (strain or plasmid) */
  stockType: string,
}

/**
 * AddToCartButton appears on the catalog page if the stock is available
 * for purchase.
 */

export const AddToCartButton = ({
  data,
  setCheckedItems,
  stockType,
}: Props) => {
  const [{ showCartDialog }, dispatch] = useCartStore()
  const classes = useStyles()

  const handleClick = data => {
    data.forEach(item => {
      addToCart(dispatch, {
        type: stockType,
        id: item.id,
        name: item.name,
        summary: item.summary,
      })
    })
  }

  return (
    <>
      <strong>
        <IconButton
          size="medium"
          className={classes.cartButton}
          onClick={() => {
            handleClick(data)
          }}
          title="Add to cart"
          aria-label="Add to shopping cart">
          <FontAwesomeIcon icon="cart-plus" />
        </IconButton>
      </strong>
      {showCartDialog && (
        <AddToCartDialog data={data} setCheckedItems={setCheckedItems} />
      )}
    </>
  )
}

export default AddToCartButton
