// @flow
import React from "react"
import { useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { removeItem } from "actions/cart"
import useStyles from "../styles"

type Props = {
  /** Stock ID */
  id: string,
}

/**
 * AddToCartButton is the button shown on stock details pages.
 */

const RemoveFromCartButton = ({ id }: Props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeItem(id))
  }

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        size="small"
        onClick={handleClick}
        className={classes.removeBtn}
        startIcon={<FontAwesomeIcon icon="trash" size="sm" />}>
        Remove
      </Button>
    </>
  )
}

export default RemoveFromCartButton
