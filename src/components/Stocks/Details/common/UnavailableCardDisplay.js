// @flow
import React from "react"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import useStyles from "components/Stocks/Details/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UnavailableCardDisplay = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h6" className={classes.cardHeader}>
        <FontAwesomeIcon icon="times" className={classes.unavailableIcon} />
        Unavailable
      </Typography>
      <Divider />
      <Typography variant="body2" className={classes.unavailableText}>
        This item is currently unavailable at the Dicty Stock Center.
        <br />
        <br />
        If you would like to receive this stock from the DSC,{" "}
        <a className={classes.link} href="mailto:dictystocks@northwestern.edu">
          send us an email
        </a>{" "}
        and we will contact the depositor.
      </Typography>
    </div>
  )
}

export default UnavailableCardDisplay
