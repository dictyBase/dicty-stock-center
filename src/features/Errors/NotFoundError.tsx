import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import sadDicty from "common/assets/sad-dicty.png"
import useStyles from "./errorStyles"

type Props = {
  /** Error message to display */
  error: string
}

/**
 * UI display when a page was not found.
 */

const NotFoundError = ({ error }: Props) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.mainGrid} justify="center">
      <Grid item xs={10} md={8}>
        <div className={classes.error400}>
          <img src={sadDicty} alt="Sad Dicty -- Not Found" />
          <h2>Not Found</h2>
          <p className={classes.paragraph}>
            <em>{error}</em>
          </p>
          <p className={classes.paragraph}>
            Try a different link or navigate back to the{" "}
            <Link to={"/"}>DSC homepage</Link>.
          </p>
        </div>
      </Grid>
    </Grid>
  )
}

export default NotFoundError
