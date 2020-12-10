import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(() => ({
  cartFullSlash: {
    color: "#8a8a8a",
  },
}))

type Props = {
  /** Title used for button tooltip and aria-label */
  title: string
  /** Indicates if shopping cart is full */
  cartFull?: boolean
  /** Size of icon */
  size?: "small" | "medium" | undefined
}
/**
 * UnavailableButton appears on catalog pages when an item
 * is not in stock.
 */

export const UnavailableButton = ({
  title,
  cartFull,
  size = "medium",
}: Props) => {
  const classes = useStyles()

  return (
    <Tooltip title={title}>
      <span>
        <IconButton disabled size={size} aria-label={title} color="default">
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon="cart-plus" />
            <FontAwesomeIcon icon="slash" className={classes.cartFullSlash} />
          </span>
        </IconButton>
      </span>
    </Tooltip>
  )
}

export default UnavailableButton
