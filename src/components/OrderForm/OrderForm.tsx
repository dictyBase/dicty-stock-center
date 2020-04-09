import React, { useState } from "react"
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import OrderFormStepper from "./OrderFormStepper"
import initialValues from "./utils/initialValues"
import validationSchema from "./utils/validationSchema"
import useStyles from "./formStyles"

// List of page components for multi-step form
const pages = [ShippingPage, PaymentPage, SubmitPage]

/**
 * OrderForm is the main component used for the checkout process.
 */

const OrderForm = () => {
  const classes = useStyles()
  const [pageNum, setPageNum] = useState(0)
  const [submitError, setSubmitError] = useState(false)
  const PageComponent = pages[pageNum]

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
        <OrderFormStepper pageNum={pageNum} />
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => actions.setSubmitting(false)}>
          {() => (
            <Form>
              <PageComponent
                pageNum={pageNum}
                setPageNum={setPageNum}
                setSubmitError={setSubmitError}
              />
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}

export default OrderForm
