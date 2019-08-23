// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Snackbar from "@material-ui/core/Snackbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToCart } from "actions/cart"
import styles from "components/Stocks/Plasmids/plasmidStyles"

type Props = {
  /** Action for adding an item to the shopping cart */
  addToCart: Function,
  /** Material-UI styling */
  classes: Object,
  /** Strain ID number */
  id: string,
  /** Strain label (name) */
  label: string,
  /** Height of row */
  rowHeight: string,
}

/**
 * AddToCartButton appears in a catalog row if the stock is available
 * for purchase.
 */

export const AddToCartButton = ({
  classes,
  id,
  label,
  addToCart,
  rowHeight,
}: Props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleClick = (id: string, label: string) => {
    addToCart({
      type: "strain",
      id: id,
      name: label,
    })
    setSnackbarOpen(true)
  }

  const handleClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <>
      <strong>
        <IconButton
          size="medium"
          className={classes.cartButton}
          onClick={() => {
            handleClick(id, label)
          }}
          title="Add to cart"
          aria-label="Add to shopping cart">
          <FontAwesomeIcon icon="cart-plus" />
        </IconButton>
      </strong>
      <Snackbar
        autoHideDuration={2500}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarOpen}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "cart-id",
        }}
        message={
          <span id="cart-id">
            <FontAwesomeIcon icon="check-circle" /> &nbsp; Item added to cart
          </span>
        }
      />
    </>
  )
}

export default connect<*, *, *, *, *, *>(
  null,
  { addToCart },
)(withStyles(styles)(AddToCartButton))
