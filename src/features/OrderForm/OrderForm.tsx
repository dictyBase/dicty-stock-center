import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import OrderFormStepper from "./OrderFormStepper"
import initialValues from "./utils/initialValues"
import useStyles from "./formStyles"

/**
 * OrderForm is the main component used for the checkout process.
 */

const OrderForm = () => {
  const classes = useStyles()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState(initialValues)
  const [submitError, setSubmitError] = useState(false)

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
    <Grid container spacing={2} className={classes.layout}>
      <Helmet>
        <title>Order Form - Dicty Stock Center</title>
        <meta name="description" content="Order form for Dicty Stock Center" />
      </Helmet>
      <Grid item xs={12}>
        <div className={classes.centerText}>
          <h1>Checkout</h1>
        </div>
        <OrderFormStepper step={step} />
        {submitError && (
          <Alert className={classes.submitAlert} severity="error">
            <AlertTitle>Error</AlertTitle>
            <p>
              There was an error submitting your order. This is most likely a
              problem on our end. If the problem persists, please email us at
              &nbsp;
              <a
                href="mailto:dictystocks@northwestern.edu?Subject=Question"
                target="_top">
                dictystocks@northwestern.edu
              </a>
              .
            </p>
          </Alert>
        )}
        {pageContent}
      </Grid>
    </Grid>
  )
}

export default OrderForm
