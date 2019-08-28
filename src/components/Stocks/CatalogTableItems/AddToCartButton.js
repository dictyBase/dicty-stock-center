// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToCart } from "actions/cart"

const useStyles = makeStyles(theme => ({
  cartButton: {
    color: "#004080",
  },
  dialogTitle: {
    backgroundColor: "#0059b3",
    color: "#fff",
    margin: 0,
    padding: "16px",
  },
  closeButton: {
    position: "absolute",
    right: "8px",
    top: "8px",
    color: "#fff",
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  cartDialogButton: {
    backgroundColor: "#004080",
    color: "#fff",
  },
}))

type Props = {
  /** Action for adding an item to the shopping cart */
  addToCart: Function,
  /** React Router object */
  history: Object,
  /** Strain ID number */
  id: string,
  /** Strain label (name) */
  label: string,
  /** Strain summary */
  summary: string,
}

/**
 * AddToCartButton appears in a catalog row if the stock is available
 * for purchase.
 */

export const AddToCartButton = ({
  id,
  label,
  summary,
  addToCart,
  history,
}: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()

  const handleClick = (id: string, label: string, summary: string) => {
    addToCart({
      type: "strain",
      id: id,
      name: label,
      summary: summary,
    })
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
  }

  const handleViewCart = () => {
    history.push("/cart")
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
      <Dialog
        onClose={handleClose}
        fullWidth
        aria-labelledby="cart-dialog-title"
        open={dialogOpen}>
        <DialogTitle className={classes.dialogTitle} id="cart-dialog-title">
          Added to Cart
          <IconButton
            aria-label="close-dialog"
            className={classes.closeButton}
            onClick={handleClose}>
            <FontAwesomeIcon icon="times" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>
              <Link className={classes.link} to={`/strains/${id}`}>
                {label}
              </Link>
            </strong>
            <br />
            {id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="default">
            Continue Shopping
          </Button>
          <Button
            className={classes.cartDialogButton}
            onClick={handleViewCart}
            variant="contained"
            color="primary">
            View Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default connect<*, *, *, *, *, *>(
  null,
  { addToCart },
)(withRouter(AddToCartButton))
