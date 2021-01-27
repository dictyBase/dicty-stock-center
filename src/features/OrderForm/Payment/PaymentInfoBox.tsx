import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PaymentInfoBoxItems from "./PaymentInfoBoxItems"

const useStyles = makeStyles((theme) => ({
  panel: {
    backgroundColor: "#e6f2ff",
    color: theme.palette.primary.dark,
    margin: theme.spacing(2, 0, 2, 0),
    padding: theme.spacing(3),
    border: "1px solid #e6f2ff",
    borderRadius: "8px",
  },
  button: {
    color: theme.palette.error.main,
    fontSize: "1.2em",
    "&:hover": {
      color: theme.palette.error.dark,
    },
  },
}))

/**
 * PaymentInfoBox contains general information about making a payment.
 */
const PaymentInfoBox = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} className={classes.panel}>
        <PaymentInfoBoxItems />
        <Button
          component={Link}
          to="/information/payment"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          endIcon={<FontAwesomeIcon icon="external-link-alt" size="sm" />}
          className={classes.button}>
          Payment Information
        </Button>
      </Grid>
    </Grid>
  )
}

export default PaymentInfoBox
