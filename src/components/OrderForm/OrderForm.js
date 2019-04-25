// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { Form, Formik } from "formik"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { Helmet } from "react-helmet"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import initialValues from "./initialValues"
import validationSchema from "./validationSchema"
import styles from "./formStyles"
import { removeItem } from "actions/cart"
import type { MapStateToProps } from "react-redux"

const pages = [ShippingPage, PaymentPage, SubmitPage]

const POST_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Action to remove items from the cart */
  removeItem: Function,
  /** Items currently in the cart */
  items: Array<{
    /** ID of item */
    id: string,
    /** Name of item */
    name: string,
  }>,
  /** React Router History */
  history: Object,
}

/**
 * OrderForm is the main component used for the checkout process.
 */

export const OrderForm = (props: Props) => {
  const [pageNum, setPageNum] = useState(0)
  const { classes, items, removeItem } = props
  const PageComponent = pages[pageNum]

  return (
    <Grid container spacing={16} className={classes.layout}>
      <Helmet>
        <title>Order Form - Dicty Stock Center</title>
        <meta name="description" content="Order form for Dicty Stock Center" />
      </Helmet>
      <Grid item xs={12}>
        <Mutation mutation={POST_ORDER}>
          {(createOrder, { loading, error }) => (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(false)
                await createOrder({
                  variables: {
                    input: {
                      courier: values.shippingAccount,
                      courier_account: values.shippingAccountNumber,
                      comments: values.comments,
                      payment: values.paymentMethod,
                      purchase_order_num: values.purchaseOrderNum,
                      status: "IN_PREPARATION",
                      consumer: values.email,
                      payer: values.payerEmail,
                      purchaser: values.email,
                      items: items.map(item => item.id),
                    },
                  },
                })
                items.forEach(item => removeItem(item.id))
                const { history } = props
                history.push("/order/submitted")
              }}
              render={props => (
                <Form>
                  <PageComponent {...props} page={[pageNum, setPageNum]} />
                </Form>
              )}
            />
          )}
        </Mutation>
      </Grid>
    </Grid>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  items: state.cart.addedItems,
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItem(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(OrderForm))
