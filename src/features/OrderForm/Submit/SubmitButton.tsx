import React from "react"
import { useFormikContext } from "formik"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { useHistory } from "react-router-dom"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import {
  CREATE_ORDER,
  CREATE_USER,
  UPDATE_USER,
} from "common/graphql/mutations"
import { GET_USER_BY_EMAIL } from "common/graphql/queries"
import useStyles from "../formStyles"
import { FormikValues } from "../utils/initialValues"
import { CartItem } from "../types"

/**
 * getIDs creates a new array of just stock IDs
 */
const getIDs = (items: Array<CartItem>) =>
  items.map((item: CartItem) => item.id)

const getConsumerVariables = (values: FormikValues) => ({
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
})

const getPayerVariables = (values: FormikValues) => ({
  first_name: values.payerFirstName,
  last_name: values.payerLastName,
  email: values.payerEmail,
  organization: values.payerOrganization,
  group_name: values.payerLab,
  first_address: values.payerAddress1,
  second_address: values.payerAddress2,
  city: values.payerCity,
  state: values.payerState,
  zipcode: values.payerZip,
  country: values.payerCountry,
  phone: values.payerPhone,
  is_active: true,
})

/**
 * getUserVariables generates a variables object that is passed with
 * create or update user mutations.
 */
const getUserVariables = (
  values: FormikValues,
  userType: string,
  id?: string,
) => {
  const inputVals =
    userType === "consumer"
      ? getConsumerVariables(values)
      : getPayerVariables(values)
  const variablesObj: any = {
    variables: {
      input: inputVals,
    },
  }
  // if there's an ID, that means we need to send an update mutation;
  // add ID to variables and remove email (since this cannot be updated)
  if (id) {
    variablesObj.variables.id = id
    delete variablesObj.variables.input.email
  }
  return variablesObj
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
 * updateOrCreateUser attempts to find a user from our database via the consumer's
 * email address. If successful, it then updates the user with the current values.
 * Otherwise, it adds a new user to our database.
 */
const updateOrCreateUser = async (
  refetch: Function,
  values: FormikValues,
  updateUser: Function,
  createUser: Function,
  setSubmitError: Function,
  userType: string,
) => {
  const userEmail = userType === "consumer" ? values.email : values.payerEmail
  try {
    const user = await refetch({
      email: userEmail,
    })
    if (user.data.userByEmail) {
      const updatedUser = await updateUser(
        getUserVariables(values, userType, user.data.userByEmail.id),
      )
      return updatedUser
    }
  } catch (error) {
    const notFound = error.graphQLErrors[0].extensions.code === "NotFound"
    if (notFound) {
      const createdUser = await createUser(getUserVariables(values, userType))
      return createdUser
    }
    setSubmitError(error)
    return Promise.reject(error)
  }
}

/**
 * SubmitButton is the button used to submit the order. It
 * appears on the last page of the order form, and it contains the
 * necessary logic for GraphQL queries and mutations.
 */

const SubmitButton = ({ setSubmitError }: { setSubmitError: Function }) => {
  const { isSubmitting, values, submitForm } = useFormikContext<any>()
  const [{ addedItems }] = useCartStore()
  const { emptyCart } = useCartItems(addedItems)
  const history = useHistory()
  const [createOrder] = useMutation(CREATE_ORDER)
  const [createUser] = useMutation(CREATE_USER)
  const [updateUser] = useMutation(UPDATE_USER)
  const { refetch } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email: values.email },
    skip: true, // skip initial fetch, we only want to fetch on button click
  })
  const classes = useStyles()

  const handleSubmit = async () => {
    try {
      // update or create consumer
      await updateOrCreateUser(
        refetch,
        values,
        updateUser,
        createUser,
        setSubmitError,
        "consumer",
      )
      // update or create payer
      await updateOrCreateUser(
        refetch,
        values,
        updateUser,
        createUser,
        setSubmitError,
        "payer",
      )
      const order = await createOrder(getOrderVariables(values, addedItems))
      submitForm()
      history.push({
        pathname: "/order/submitted",
        state: {
          orderID: order.data.createOrder.id,
        },
      })
      emptyCart()
    } catch (error) {
      setSubmitError(true)
    }
  }

  return (
    <Button
      type="submit"
      size="large"
      className={classes.submitBtn}
      disabled={isSubmitting}
      onClick={handleSubmit}>
      Submit Order &nbsp;
      <FontAwesomeIcon icon="check-circle" />
    </Button>
  )
}

export { getUserVariables, getIDs }
export default SubmitButton
