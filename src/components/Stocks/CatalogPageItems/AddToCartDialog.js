// @flow
import React from "react"
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
    backgroundColor: "#0059b3",
    color: "#fff",
  },
}))

type Props = {
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
  setHover: Function,
  /** Function to add to checked items array */
  setCheckedItems: Function,
  /** Boolean for whether item added dialog is open */
  dialogOpen: Boolean,
  /** Function that toggles whether dialog is open */
  setDialogOpen: Function,
  /** React Router history object */
  history: Object,
}

/**
 * AddToCartDialog is the dialog box that appears when an item
 * is added to the cart.
 */

const AddToCartDialog = ({
  data,
  dialogOpen,
  setDialogOpen,
  setHover,
  setCheckedItems,
  history,
}: Props) => {
  const classes = useStyles()

  const handleClose = () => {
    setDialogOpen(false)
    setHover ? setHover(false) : setCheckedItems([])
  }

  const handleViewCart = () => {
    history.push("/cart")
  }

  return (
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
        {data.map(item => (
          <DialogContentText key={item.id}>
            <strong>
              <Link className={classes.link} to={`/strains/${item.id}`}>
                {item.label}
              </Link>
            </strong>
            <br />
            <em>{item.summary}</em>
            <br />
            {item.id}
          </DialogContentText>
        ))}
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
  )
}

export default connect<*, *, *, *, *, *>(
  null,
  { addToCart },
)(withRouter<*>(AddToCartDialog))
