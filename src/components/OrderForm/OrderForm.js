/* eslint-disable react/jsx-no-bind */
// @flow
import React, { useState } from "react"
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import initialValues from "./initialValues"
import validationSchema from "./validationSchema"
import styles from "./formStyles"

const pages = [ShippingPage, PaymentPage, SubmitPage]

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * OrderForm is the main component used for the checkout process.
 */

const OrderForm = (props: Props) => {
  const [pageNum, setPageNum] = useState(0)
  const { classes } = props
  const PageComponent = pages[pageNum]

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false)
    alert(JSON.stringify(values, null, 2))
    const { history } = props
    history.push("/order/submitted")
  }

  return (
    <Grid container spacing={16} className={classes.layout}>
      <Helmet>
        <title>Order Form - Dicty Stock Center</title>
        <meta name="description" content="Order form for Dicty Stock Center" />
      </Helmet>
      <Grid item xs={12}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={props => (
            <Form>
              <PageComponent {...props} page={[pageNum, setPageNum]} />
            </Form>
          )}
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(OrderForm)
