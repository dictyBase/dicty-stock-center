// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, PrimaryButton } from "styles"

const styles = theme => ({
  jumbotron: {
    paddingTop: "30px",
    paddingBottom: "30px",
    marginBottom: "30px",
    color: "inherit",
    backgroundColor: "#eee",
    textAlign: "center",
  },
})

type Props = {
  classes: Object,
}

/**
 * General 404 error page, currently designated as "Page Not Ready"/"Under Construction"
 */

const PageNotReady = (props: Props) => {
  const { classes } = props

  return (
    <Container>
      <div className={classes.jumbotron}>
        <h1>
          <FontAwesomeIcon icon="wrench" /> Under Construction
        </h1>
        <br />
        <p>This page is not ready yet.</p>
        <br />
        <br />
        <Link to="/">
          <PrimaryButton>Stock Center Home</PrimaryButton>
        </Link>
      </div>
    </Container>
  )
}

export default withStyles(styles)(PageNotReady)
