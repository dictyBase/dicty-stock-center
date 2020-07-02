import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(({ palette }: Theme) => ({
  cartFull: {
    color: palette.secondary.main,
  },
  cartFullSlash: {
    color: "#000",
  },
}))

type Props = {
  /** Title used for button tooltip and aria-label */
  title: string
  /** Indicates if shopping cart is full */
  cartFull?: boolean
}
/**
 * UnavailableButton appears on catalog pages when an item
 * is not in stock.
 */

export const UnavailableButton = ({ title, cartFull }: Props) => {
  const classes = useStyles()

  return (
    <Tooltip title={title}>
      <span>
        <IconButton disabled size="medium" aria-label={title}>
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon
              icon="cart-plus"
              className={cartFull ? classes.cartFull : ""}
            />
            <FontAwesomeIcon
              icon="slash"
              className={cartFull ? classes.cartFullSlash : ""}
            />
          </span>
        </IconButton>
      </span>
    </Tooltip>
  )
}

export default UnavailableButton
