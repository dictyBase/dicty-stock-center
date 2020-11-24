import React from "react"
import { useLocation, useParams } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import BackToHomepageButton from "common/components/BackToHomepageButton"
import useAuthorization from "common/hooks/useAuthorization"
import sadDicty from "common/assets/sad-dicty.png"
import useStyles from "./errorStyles"
import AddPageButtons from "features/EditablePages/AddPageButtons"

type Params = {
  /** Name param in URL */
  name: string
  /** Subname param in URL */
  subname: string
}

/**
 * UI display when a page was not found.
 */

const NotFoundError = () => {
  const { name, subname } = useParams<Params>()
  const location = useLocation()
  const { canEditPages, verifiedToken } = useAuthorization()
  const classes = useStyles()

  const authorizedUser = canEditPages && verifiedToken

  return (
    <Grid container className={classes.mainGrid} justify="center">
      <Grid item xs={10} md={8}>
        <div className={classes.error400}>
          <img src={sadDicty} alt="Sad Dicty -- Page Not Found" />
          <h3>Page Not Found</h3>
          <p className={classes.paragraph}>
            Sorry! We can&apos;t find that page.
          </p>
          <p className={classes.paragraph}>
            You can try one of the links in our navbar above, or head back to
            the homepage.
          </p>
          <BackToHomepageButton />
          {authorizedUser && (
            <AddPageButtons
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
