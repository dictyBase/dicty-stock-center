// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import Button from "@material-ui/core/Button"
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
    <TableCell
      component="div"
      className={classNames(classes.flexContainer, classes.tableCell)}
      variant="body"
      style={{ height: rowHeight }}>
      <strong>
        <Button
          className={classes.cartButton}
          onClick={() => {
            handleClick(id, label)
          }}>
          <FontAwesomeIcon icon="shopping-cart" />
          &nbsp;Add to cart
        </Button>
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
    </TableCell>
  )
}

export default connect(
  null,
  { addToCart },
)(withStyles(styles)(AddToCartButton))
