import React, { useState } from "react"
import { Form, Formik } from "formik"
import { useMutation } from "@apollo/react-hooks"
import { useHistory } from "react-router-dom"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import initialValues from "./utils/initialValues"
import validationSchema from "./utils/validationSchema"
import useStyles from "./formStyles"
import { useCartStore } from "components/ShoppingCart/CartStore"
import useCartItems from "hooks/useCartItems"
import { POST_ORDER } from "graphql/mutations"
import OrderFormStepper from "./OrderFormStepper"

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

const getIDs = (items: Array<CartItem>) => items.map(item => item.id)

const pages = [ShippingPage, PaymentPage, SubmitPage]

/**
 * OrderForm is the main component used for the checkout process.
 */

const OrderForm = () => {
  const history = useHistory()
  const classes = useStyles()
  const [{ addedItems }] = useCartStore()
  const { emptyCart } = useCartItems(addedItems)
  const [pageNum, setPageNum] = useState(0)
  const PageComponent = pages[pageNum]
  const [createOrder] = useMutation(POST_ORDER)

  return (
    <Grid container spacing={2} className={classes.layout}>
      <Helmet>
        <title>Order Form - Dicty Stock Center</title>
        <meta name="description" content="Order form for Dicty Stock Center" />
      </Helmet>
      <Grid item xs={12}>
        <div style={{ textAlign: "center" }}>
          <h1>Checkout</h1>
        </div>
        <OrderFormStepper pageNum={pageNum} />
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
                  items: getIDs(addedItems),
                },
              },
            })
            history.push("/order/submitted")
            emptyCart()
          }}>
          {props => (
            <Form>
              <PageComponent pageNum={pageNum} setPageNum={setPageNum} />
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}

export { getIDs }
export default OrderForm
