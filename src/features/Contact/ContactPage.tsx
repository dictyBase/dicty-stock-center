import React from "react"
import { Helmet } from "react-helmet"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ContactForm from "./ContactForm"

const useStyles = makeStyles({
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

/**
 * DSC contact page
 */

const Contact = () => {
  const classes = useStyles()

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
          <ContactForm />
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
