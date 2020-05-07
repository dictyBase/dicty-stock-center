import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  /** Title used for button tooltip and aria-label */
  title: string
}
/**
 * UnavailableButton appears on catalog pages when an item
 * is not in stock.
 */

export const UnavailableButton = ({ title }: Props) => (
  <Tooltip title={title}>
    <span>
      <IconButton disabled size="medium" aria-label={title}>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon="cart-plus" />
          <FontAwesomeIcon icon="slash" />
        </span>
      </IconButton>
    </span>
  </Tooltip>
)

export default UnavailableButton
