import React from "react"
import { Link, Navigate, useParams } from "react-router-dom"
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
import { OrderState } from "./context/OrderContext"

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

const BackToHomepage = ({ button }: { button: string }) => (
  <Grid item>
    <Box margin={2}>
      <Button
        component={Link}
        to="/"
        color="primary"
        variant="contained"
        size="large"
        className={button}
        startIcon={<FontAwesomeIcon icon="home" />}>
        Back to DSC homepage
      </Button>
    </Box>
  </Grid>
)

const OrderHeader = ({
  confirmation,
  orderID,
}: {
  confirmation: string
  orderID: string
}) => (
  <Box mt={3} mb={3}>
    <Typography gutterBottom component="p" className={confirmation}>
      <strong>Order ID: {orderID}</strong>
    </Typography>
  </Box>
)

const OrderDescription = () => (
  <>
    <Typography gutterBottom variant="h1">
      <FontAwesomeIcon icon="check-circle" /> Thank you for your order
    </Typography>
    <Box mb={3}>
      <Typography gutterBottom component="p">
        We have sent you a confirmation email.
      </Typography>
      <Typography gutterBottom component="p">
        The <strong>Payer</strong> will soon receive emails through the{" "}
        <strong>NU Core</strong> (Northwestern University) system to complete
        payment.
      </Typography>
    </Box>
  </>
)

const ShowPDF = ({ state }: { state: OrderState }) => (
  <PDFViewer width={800} height={600}>
    <OrderSummaryPDF
      cartItems={state.cartItems}
      formData={state.formData}
      cartTotal={state.cartTotal}
      orderID={state.orderID}
    />
  </PDFViewer>
)

/**
 * Displays notification that the user's order was submitted successfully.
 */
const OrderConfirmation = () => {
  const classes = useStyles()
  const { state } = useOrderStore()
  const { orderId } = useParams()
  if (state.orderID !== orderId) return <Navigate to="/" />

  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={12}>
        <Box margin={2}>
          <OrderHeader
            confirmation={classes.confirmation}
            orderID={state.orderID}
          />
          <OrderDescription />
          <ShowPDF state={state} />
        </Box>
      </Grid>
      <BackToHomepage button={classes.button} />
    </Grid>
  )
}

export default OrderConfirmation
