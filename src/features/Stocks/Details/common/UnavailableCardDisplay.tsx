import React from "react"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "features/Stocks/Details/styles"

const UnavailableCardDisplay = () => {
  const classes = useStyles()

  return (
    <div className={classes.unavailableContainer}>
      <Typography variant="h6">
        <FontAwesomeIcon icon="times" className={classes.unavailableIcon} />
        Unavailable
      </Typography>
      <Divider />
      <Typography variant="body2" className={classes.unavailableText}>
        This item is currently unavailable at the Dicty Stock Center.
      </Typography>
    </div>
  )
}

export default UnavailableCardDisplay
