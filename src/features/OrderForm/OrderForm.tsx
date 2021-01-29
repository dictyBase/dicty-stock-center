import React from "react"
import { Helmet } from "react-helmet"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import OrderFormStepper from "./OrderFormStepper"
import SubmitError from "./Submit/SubmitError"
import initialValues from "./utils/initialValues"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(4),
  },
}))

/**
 * OrderForm is the main component used for the checkout process.
 */

const OrderForm = () => {
  const [step, setStep] = React.useState(0)
  const [formData, setFormData] = React.useState(initialValues)
  const [submitError, setSubmitError] = React.useState(false)
  const classes = useStyles()

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  let pageContent
  switch (step) {
    case 0:
      pageContent = (
        <ShippingPage
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )
      break
    case 1:
      pageContent = (
        <PaymentPage
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
      break
    case 2:
      pageContent = (
        <SubmitPage
          formData={formData}
          prevStep={prevStep}
          setSubmitError={setSubmitError}
        />
      )
      break
    default:
      pageContent = null
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      <Helmet>
        <title>Order Form - Dicty Stock Center</title>
        <meta name="description" content="Order form for Dicty Stock Center" />
      </Helmet>
      <Grid item xs={12}>
        <Typography variant="h1" align="center">
          Checkout
        </Typography>
        <OrderFormStepper step={step} />
        {submitError && <SubmitError />}
        {pageContent}
      </Grid>
    </Grid>
  )
}

export default OrderForm
