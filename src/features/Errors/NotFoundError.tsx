import React from "react"
import { useLocation, useParams } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import AddPageButton from "features/EditablePages/AddPageButton"
import useAuthorization from "common/hooks/useAuthorization"
import sadDicty from "common/assets/sad-dicty.png"
import useStyles from "./errorStyles"

type Params = {
  /** Name param in URL */
  name: string
  /** Subname param in URL */
  subname: string
}

type Props = {
  /** Error message to display */
  error: string
}

/**
 * UI display when a page was not found.
 */

const NotFoundError = ({ error }: Props) => {
  const { name, subname } = useParams<Params>()
  const location = useLocation()
  const { canEditPages, verifiedToken } = useAuthorization()
  const classes = useStyles()

  const authorizedUser = canEditPages && verifiedToken

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
          {authorizedUser && location.pathname.includes("information") && (
            <AddPageButton
              name={name}
              subname={subname}
              url={location.pathname}
            />
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default NotFoundError
