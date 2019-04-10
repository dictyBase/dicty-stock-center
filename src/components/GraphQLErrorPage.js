// @flow
import React from "react"
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
  link500: {
    color: "#e0e0e0",
    textDecoration: "none",
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
})

type Props = {
  /** GraphQL error object */
  error: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * GraphQLErrorPage is used to display any errors found when issuing a
 * GraphQL query or mutation.
 */

const GraphQLErrorPage = ({ error, classes }: Props) => {
  if (!error || !error.message) return null

  // Network errors warrant a more alarming error page.
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    console.error(error.networkError.result.errors)
    return (
      <Grid container className={classes.mainGrid} justify="center">
        <Grid item xs={10} md={8}>
          <div className={classes.error500}>
            <h2>Sorry! There was a network error.</h2>
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

  const errorCode = error.graphQLErrors[0].extensions.code
  const errorMsg = error.graphQLErrors[0].message
  const printError = `
  error: ${errorMsg}
  code: ${errorCode}
  `

  if (errorCode === "Unavailable") {
    console.error(printError)
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

  if (errorCode === "NotFound") {
    console.error(printError)
    return (
      <Grid container className={classes.mainGrid} justify="center">
        <Grid item xs={10} md={8}>
          <div className={classes.error400}>
            <img src={sadDicty} alt="Sad Dicty -- Stock Not Found" />
            <h3>{errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1)}</h3>
            <div className={classes.list}>
              <ul>
                <li>This is probably an invalid ID. Try a different one.</li>
                <li>You might be coming here from an outdated link.</li>
              </ul>
            </div>
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
  console.error(printError)
  return (
    <Grid container className={classes.mainGrid} justify="center">
      <Grid item xs={10} md={8}>
        <div className={classes.error400}>
          <img src={sadDicty} alt="Sad Dicty -- HTTP Error" />
          <h1>
            <FontAwesomeIcon icon="exclamation-circle" /> Error
          </h1>
          <h3>{error.message.replace("GraphQL error: ", "")}</h3>
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

GraphQLErrorPage.defaultProps = {
  error: {},
}

export default withStyles(styles)(GraphQLErrorPage)
