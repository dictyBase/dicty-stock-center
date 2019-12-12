// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import { green } from "@material-ui/core/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartDialog from "components/Stocks/Catalogs/common/AddToCartDialog"
import { addToCart } from "actions/cart"

const useStyles = makeStyles(theme => ({
  cartButton: {
    color: green[600],
  },
}))

type Props = {
  /** Action for adding an item to the shopping cart */
  addToCart: Function,
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
  addToCart,
  setCheckedItems,
  stockType,
}: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()

  const handleClick = data => {
    data.forEach(item => {
      addToCart({
        type: stockType,
        id: item.id,
        name: item.name,
        summary: item.summary,
      })
    })
    setDialogOpen(true)
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
      <AddToCartDialog
        data={data}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        setCheckedItems={setCheckedItems}
      />
    </>
  )
}

export default connect<*, *, *, *, *, *>(null, { addToCart })(AddToCartButton)
