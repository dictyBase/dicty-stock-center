import React, { useState } from "react"
import { Form, Formik } from "formik"
import { useMutation, useApolloClient } from "@apollo/react-hooks"
import ApolloClient from "apollo-client"
import { useHistory } from "react-router-dom"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import initialValues, { FormikValues } from "./utils/initialValues"
import validationSchema from "./utils/validationSchema"
import useStyles from "./formStyles"
import { useCartStore } from "components/ShoppingCart/CartStore"
import useCartItems from "hooks/useCartItems"
import { CREATE_ORDER, CREATE_USER, UPDATE_USER } from "graphql/mutations"
import { GET_USER_BY_EMAIL } from "graphql/queries"
import OrderFormStepper from "./OrderFormStepper"

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

const getIDs = (items: Array<CartItem>) =>
  items.map((item: CartItem) => item.id)

// List of page components for multi-step form
const pages = [ShippingPage, PaymentPage, SubmitPage]

/**
 * getUserVariables generates a variables object that is passed with
 * create or update user mutations.
 */
const getUserVariables = (values: FormikValues, id?: string) => {
  const variablesObj: any = {
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
  }
  // if there's an ID, that means we need to send an update mutation
  // add ID to variables and remove email (since this cannot be updated)
  if (id) {
    variablesObj.variables.id = id
    delete variablesObj.variables.input.email
  }
  return variablesObj
}

/**
 * updateOrCreateUser attempts to find a user from our database via the consumer's
 * email address. If successful, it then updates the user with the current values.
 * Otherwise, it adds a new user to our database.
 */
const updateOrCreateUser = async (
  client: ApolloClient<object>,
  values: FormikValues,
  updateUser: Function,
  createUser: Function,
  setSubmitError: Function,
) => {
  try {
    const { data: userData } = await client.query({
      query: GET_USER_BY_EMAIL,
      variables: { email: values.email },
    })
    await updateUser(getUserVariables(values, userData.userByEmail.id))
  } catch (error) {
    const notFound = error.graphQLErrors[0].extensions.code === "NotFound"
    if (notFound) {
      await createUser(getUserVariables(values))
      return
    }
    setSubmitError(error)
  }
}

/**
 * getOrderVariables generates a variables object that is sent with the
 * create order mutation.
 */
const getOrderVariables = (
  values: FormikValues,
  addedItems: Array<CartItem>,
) => ({
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

/**
 * OrderForm is the main component used for the checkout process.
 */

const OrderForm = () => {
  const client = useApolloClient()
  const [createOrder] = useMutation(CREATE_ORDER)
  const [createUser] = useMutation(CREATE_USER)
  const [updateUser] = useMutation(UPDATE_USER)
  const history = useHistory()
  const classes = useStyles()
  const [{ addedItems }] = useCartStore()
  const { emptyCart } = useCartItems(addedItems)
  const [pageNum, setPageNum] = useState(0)
  const [submitError, setSubmitError] = useState(null)
  const PageComponent = pages[pageNum]

  const handleSubmit = async (values: FormikValues, { setSubmitting }: any) => {
    setSubmitting(false)
    await updateOrCreateUser(
      client,
      values,
      updateUser,
      createUser,
      setSubmitError,
    )
    // if no error, continue with order processing
    if (submitError === null) {
      await createOrder(getOrderVariables(values, addedItems))
      history.push("/order/submitted")
      emptyCart()
    }
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
        <OrderFormStepper pageNum={pageNum} />
        {submitError && (
          <Alert className={classes.submitAlert} severity="error">
            <AlertTitle>Error</AlertTitle>
            <p>
              There was an error submitting your order. This is most likely a
              problem on our end. If the problem persists, please email us at
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

export { getIDs, getUserVariables, updateOrCreateUser, getOrderVariables }
export default OrderForm
