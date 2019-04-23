/* eslint-disable react/jsx-no-bind */
// @flow
import React, { useState } from "react"
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
          render={props => (
            <Form>
              <PageComponent {...props} />
              <br />
              <Grid container justify="flex-end" spacing={8}>
                <Grid item xs={3}>
                  {pageNum > 0 && (
                    <Button
                      color="primary"
                      size="large"
                      className={classes.previousBtn}
                      onClick={() => setPageNum(pageNum - 1)}>
                      <FontAwesomeIcon icon="arrow-circle-left" />
                      &nbsp; Previous
                    </Button>
                  )}
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={3}>
                  {pageNum === pages.length - 1 ? (
                    <Button
                      type="submit"
                      size="large"
                      className={classes.submitBtn}
                      disabled={props.isSubmitting}>
                      Submit Order &nbsp;
                      <FontAwesomeIcon icon="check-circle" />
                    </Button>
                  ) : (
                    <Button
                      size="large"
                      className={classes.continueBtn}
                      onClick={() => setPageNum(pageNum + 1)}>
                      Continue &nbsp;
                      <FontAwesomeIcon icon="arrow-circle-right" />
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Form>
          )}
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(OrderForm)
