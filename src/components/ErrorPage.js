// @flow
import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import sadDicty from "static/sad-dicty.png"

const styles = theme => ({
  error400: {
    backgroundColor: "#eff8fb",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    borderRadius: 5,
  },
  error500: {
    backgroundColor: "#a63232",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 30,
    borderRadius: 5,
    color: "#e3e3e3",
  },
  backButton: {
    width: "25%",
    padding: "20px",
    textTransform: "none",
    backgroundColor: "#15317e",
    color: "#e3e3e3",
    "&:hover": {
      backgroundColor: "#1a3d9e",
    },
  },
  mainGrid: {
    marginTop: "40px",
  },
  paragraph: {
    padding: "10px",
  },
  link: {
    color: "#428bca",
    textDecoration: "none",
  },
  link500: {
    color: "#e0e0e0",
    textDecoration: "none",
  },
  list: {
    margin: "0 auto",
    display: "table",
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** the object that contains auth data from current state */
  auth: Object,
  /** the object that contains page data from current state */
  page: Object,
}

/**
 * General error handling page. It displays different messages based on HTTP status code.
 */

export const ErrorPage = (props: Props) => {
  const { auth, page, classes } = props

  let errorStatus = 0
  let errorMsg

  if (auth.error) {
    errorStatus = auth.error.status
    errorMsg = auth.error.title
  }

  if (page.error) {
    errorStatus = page.error.status
    errorMsg = page.error.title
  }

  if (errorStatus >= 500) {
    return (
      <Grid container className={classes.mainGrid} justify="center">
        <Grid item xs={10} md={8}>
          <div className={classes.error500}>
            <h2>Sorry! There was a server error.</h2>
            <p>
              If the problem persists, please email us at{" "}
              <a
                className={classes.link500}
                href="mailto:dictybase@northwestern.edu">
                dictybase@northwestern.edu
              </a>
              .
            </p>
            <a href="/">
              <Button
                className={classes.backButton}
                size="small"
                variant="contained"
                color="default">
                Back to homepage
              </Button>
            </a>
          </div>
        </Grid>
      </Grid>
    )
  }

  if (errorStatus === 404) {
    return (
      <Grid container className={classes.mainGrid} justify="center">
        <Grid item xs={10} md={8}>
          <div className={classes.error400}>
            <img src={sadDicty} alt="Sad Dicty -- Item Not Found" />
            <h3>Item Not Found</h3>
            <div className={classes.list}>
              <ul>
                <li>This is probably an invalid ID. Try a different one.</li>
                <li>You might be coming here from an outdated link.</li>
              </ul>
            </div>
            <p>
              {" "}
              If problems persist, email us at{" "}
              <a
                className={classes.link}
                href="mailto:dictybase@northwestern.edu">
                dictybase@northwestern.edu
              </a>
              .
            </p>
            <a href="/">
              <Button
                className={classes.backButton}
                size="small"
                variant="contained"
                color="primary">
                Back to homepage
              </Button>
            </a>
          </div>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container className={classes.mainGrid} justify="center">
      <Grid item xs={10} md={8}>
        <div className={classes.error400}>
          <img src={sadDicty} alt="Sad Dicty -- HTTP Error" />
          <h1>
            <FontAwesomeIcon icon="exclamation-circle" /> {errorStatus} Error
          </h1>
          <h3>{errorMsg}</h3>
          <p>
            If the problem persists, please email us at{" "}
            <a
              className={classes.link}
              href="mailto:dictybase@northwestern.edu">
              dictybase@northwestern.edu
            </a>
            .
          </p>
          <a href="/">
            <Button
              className={classes.backButton}
              size="small"
              variant="contained"
              color="primary">
              Back to Homepage
            </Button>
          </a>
        </div>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = ({ auth, page }) => ({ auth, page })

// $FlowFixMe
export default connect(mapStateToProps)(withStyles(styles)(ErrorPage))
