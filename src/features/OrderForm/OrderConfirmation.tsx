import React from "react"
import { Link, Navigate } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { grey } from "@material-ui/core/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PDFViewer } from "@react-pdf/renderer"
import OrderSummaryPDF from "./Submit/OrderSummaryPDF"
import useOrderStore from "./context/useOrderStore"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: grey[200],
    margin: theme.spacing(2, 0, 2, 0),
    minHeight: "320px",
  },
  button: {
    "&:hover": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
  confirmation: {
    fontSize: "1.2em",
  },
}))

/**
 * Displays notification that the user's order was submitted successfully.
 */
const OrderConfirmation = () => {
  const classes = useStyles()
  const { state } = useOrderStore()

  console.log(state)

  if (!state) {
    return <Navigate to="/" />
  }

  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={12}>
        <Box margin={2}>
          <Typography gutterBottom variant="h1">
            <FontAwesomeIcon icon="check-circle" /> Thank you for your order
          </Typography>
          <Box mt={3} mb={3}>
            <Typography
              gutterBottom
              component="p"
              className={classes.confirmation}>
              <strong>Order ID: {state.orderID}</strong>
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography gutterBottom component="p">
              We have sent you a confirmation email.
            </Typography>
            <Typography gutterBottom component="p">
              The <strong>Payer</strong> will soon receive emails through the{" "}
              <strong>NU Core</strong> (Northwestern University) system to
              complete payment.
            </Typography>
          </Box>
          <PDFViewer width={800} height={600}>
            <OrderSummaryPDF
              cartItems={state.cartItems}
              formData={state.formData}
              cartTotal={state.cartTotal}
              orderID={state.orderID}
            />
          </PDFViewer>
        </Box>
      </Grid>
      <Grid item>
        <Box margin={2}>
          <Button
            component={Link}
            to="/"
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon="home" />}>
            Back to DSC homepage
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default OrderConfirmation
