import React, { useState } from "react"
import { Form, Formik } from "formik"
import { useMutation, useApolloClient } from "@apollo/react-hooks"
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
import { CREATE_ORDER, CREATE_USER, UPDATE_USER } from "graphql/mutations"
import { GET_USER_BY_EMAIL } from "graphql/queries"
import OrderFormStepper from "./OrderFormStepper"

type FormikValues = {
  firstName: string
  lastName: string
  email: string
  organization: string
  lab: string
  address1: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
  phone: string
  shippingAccount: string
  shippingAccountNumber: string
  comments: string
  payerFirstName: string
  payerLastName: string
  payerEmail: string
  payerOrganization: string
  payerLab: string
  payerAddress1: string
  payerAddress2: string
  payerCity: string
  payerState: string
  payerZip: string
  payerCountry: string
  payerPhone: string
  paymentMethod: string
  purchaseOrderNum: string
}

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

const getIDs = (items: Array<CartItem>) =>
  items.map((item: CartItem) => item.id)

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
  const client = useApolloClient()
  const [createOrder] = useMutation(CREATE_ORDER)
  const [createUser] = useMutation(CREATE_USER)
  const [updateUser] = useMutation(UPDATE_USER)

  const handleSubmit = async (values: FormikValues, actions: any) => {
    actions.setSubmitting(false)
    try {
      const { data: userData } = await client.query({
        query: GET_USER_BY_EMAIL,
        variables: { email: values.email },
      })
      await updateUser({
        variables: {
          id: userData.userByEmail.id,
          input: {
            first_name: values.firstName,
            last_name: values.lastName,
            organization: values.organization,
            group_name: values.lab,
            first_address: values.address1,
            second_address: values.address2,
            city: values.city,
            state: values.state,
            zipcode: values.zip,
            country: values.country,
            phone: values.phone,
            is_active: true,
          },
        },
      })
    } catch (error) {
      const notFound = error.toString().includes("NotFound")
      if (notFound) {
        await createUser({
          variables: {
            input: {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              organization: values.organization,
              group_name: values.lab,
              first_address: values.address1,
              second_address: values.address2,
              city: values.city,
              state: values.state,
              zipcode: values.zip,
              country: values.country,
              phone: values.phone,
              is_active: true,
            },
          },
        })
      }
      console.log(error)
    }
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
  }

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
          onSubmit={handleSubmit}>
          {() => (
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
