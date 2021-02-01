import React from "react"
import { Link, Redirect } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { grey } from "@material-ui/core/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PDFViewer } from "@react-pdf/renderer"
import OrderSummaryPDF from "./Submit/OrderSummaryPDF"
import { CartItem } from "common/types"
import { FormikValues } from "./utils/initialValues"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: grey[200],
    margin: theme.spacing(2, 0, 2, 0),
    minHeight: "320px",
  },
  button: {
    "&:hover": {
      color: "#fff",
    },
  },
  confirmation: {
    fontSize: "1.2em",
  },
}))

type LocationProps = {
  location: {
    /** URL Pathname */
    pathname: string
    /** State passed as props from history.push */
    state?: {
      /** Submitted order ID */
      orderID: string
      /** Object containing all entered form data */
      formData: FormikValues
      /** All items from this order */
      cartItems: CartItem[]
      /** Total cost of items in cart */
      cartTotal: string
    }
  }
}

/**
 * Displays notification that the user's order was submitted successfully.
 */

const OrderConfirmation = ({ location }: LocationProps) => {
  const classes = useStyles()
  const { state } = location

  if (state === undefined) {
    return <Redirect to="/" />
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
          <PDFViewer width={window.innerHeight} height={500}>
            <OrderSummaryPDF
              cartItems={state.cartItems}
              formData={state.formData}
              cartTotal={state.cartTotal}
              orderID={state.orderID}
            />
          </PDFViewer>
          <Button
            component={Link}
            to="/"
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon="home" />}>
            DSC Home
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default OrderConfirmation
