import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.palette.error.main,
  },
}))

type Props = {
  /** Function to call when icon is clicked */
  handleClick: () => void
}

/**
 * RemoveFromCartButton is the icon used for removing an item from the cart.
 */

const RemoveFromCartButton = ({ handleClick }: Props) => {
  const theme = useTheme()
  const smallWindow = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()

  const size = smallWindow ? "small" : "medium"

  return (
    <IconButton
      className={classes.button}
      size={size}
      color="secondary"
      onClick={handleClick}>
      <FontAwesomeIcon icon="trash" size={smallWindow ? "xs" : "sm"} />
    </IconButton>
  )
}

export default RemoveFromCartButton
