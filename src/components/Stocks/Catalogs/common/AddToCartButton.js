// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartDialog from "components/Stocks/Catalogs/common/AddToCartDialog"
import { addToCart } from "actions/cart"

const useStyles = makeStyles(theme => ({
  cartButton: {
    color: "#228B22",
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
    label: string,
    /** Strain summary */
    summary: string,
  }>,
  /** Function to set hovering of list item */
  setHover?: Function,
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
  setHover,
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
        name: item.label,
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
        setHover={setHover}
        setCheckedItems={setCheckedItems}
      />
    </>
  )
}

export default connect<*, *, *, *, *, *>(null, { addToCart })(AddToCartButton)
