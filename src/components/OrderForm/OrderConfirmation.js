// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const styles = theme => ({
  alertBox: {
    padding: "15px",
    marginBottom: "20px",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "#3c763d",
    backgroundColor: "#dff0d8",
    borderColor: "#d6e9c6",
    textAlign: "center",
  },
  btn: {
    marginBottom: "10px",
    backgroundColor: "#004080",
    "&:hover": {
      backgroundColor: "#0073e6",
    },
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * Displays notification that the user's order was submitted successfully.
 */

export const OrderConfirmation = (props: Props) => {
  const { classes } = props

  return (
    <Grid container wrap="wrap" justify="center">
      <Grid item xs={8}>
        <Grid container wrap="wrap" justify="center">
          <Grid item xs={12}>
            <div className={classes.alertBox}>
              <FontAwesomeIcon icon="check-circle" size="5x" />
              <p>We have sent you a confirmation email.</p>
              <p>
                The <strong>Payer</strong> will soon receive emails through the{" "}
                <strong>NU Core</strong> (Northwestern University) system to
                complete payment.
              </p>
            </div>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              size="large"
              className={classes.btn}>
              <FontAwesomeIcon icon="home" /> &nbsp; Stock Center Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(OrderConfirmation)
