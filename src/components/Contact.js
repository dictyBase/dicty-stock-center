// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  header: {
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
    "@media (min-width: 1300px)": {
      width: "1270px",
    },
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * DSC contact form
 */

const Contact = (props: Props) => {
  const { classes } = props

  return (
    <>
      <Helmet>
        <title>Contact Us - Dicty Stock Center</title>
        <meta
          name="description"
          content="Contact page for Dicty Stock Center"
        />
      </Helmet>
      <Grid container className={classes.container} justify="center">
        <Grid item xs={12}>
          <div className={classes.header}>
            <h1>Contact Us</h1>
          </div>
        </Grid>
        <Grid item xs={12}>
          <center>
            <p>
              For questions, comments, or suggestions, please send us an
              email&nbsp;
              <a
                href="mailto:dictystocks@northwestern.edu?Subject=Question"
                target="_top">
                (dictystocks@northwestern.edu)
              </a>
              .
            </p>
            <p>We will be adding a working contact form soon.</p>
          </center>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(Contact)
