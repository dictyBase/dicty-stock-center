import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation, useQuery } from "@apollo/client"
import { useHistory } from "react-router-dom"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import {
  CREATE_ORDER,
  CREATE_USER,
  UPDATE_USER,
} from "common/graphql/mutations"
import { GET_USER_BY_EMAIL } from "common/graphql/queries/user"
import { FormikValues } from "../utils/initialValues"
import { CartItem } from "common/types"

/**
 * getIDs creates a new array of just stock IDs
 */
const getIDs = (items: Array<CartItem>) =>
  items.map((item: CartItem) => item.id)

const getConsumerVariables = (formData: FormikValues) => ({
  first_name: formData.firstName,
  last_name: formData.lastName,
  email: formData.email,
  organization: formData.organization,
  group_name: formData.lab,
  first_address: formData.address1,
  second_address: formData.address2,
  city: formData.city,
  state: formData.state,
  zipcode: formData.zip,
  country: formData.country,
  phone: formData.phone,
  is_active: true,
})

const getPayerVariables = (formData: FormikValues) => ({
  first_name: formData.payerFirstName,
  last_name: formData.payerLastName,
  email: formData.payerEmail,
  organization: formData.payerOrganization,
  group_name: formData.payerLab,
  first_address: formData.payerAddress1,
  second_address: formData.payerAddress2,
  city: formData.payerCity,
  state: formData.payerState,
  zipcode: formData.payerZip,
  country: formData.payerCountry,
  phone: formData.payerPhone,
  is_active: true,
})

/**
 * getUserVariables generates a variables object that is passed with
 * create or update user mutations.
 */
const getUserVariables = (
  formData: FormikValues,
  userType: string,
  id?: string,
) => {
  const inputVals =
    userType === "consumer"
      ? getConsumerVariables(formData)
      : getPayerVariables(formData)
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
  formData: FormikValues,
  addedItems: Array<CartItem>,
) => ({
  variables: {
    input: {
      courier: formData.shippingAccount,
      courier_account: formData.shippingAccountNumber,
      comments: formData.comments,
      payment: formData.paymentMethod,
      purchase_order_num: formData.purchaseOrderNum,
      status: "IN_PREPARATION",
      consumer: formData.email,
      payer: formData.payerEmail,
      purchaser: formData.email,
      items: getIDs(addedItems),
    },
  },
})

/**
 * updateOrCreateUser attempts to find a user from our database via the consumer's
 * email address. If successful, it then updates the user with the current formData.
 * Otherwise, it adds a new user to our database.
 */
const updateOrCreateUser = async (
  refetch: Function,
  formData: FormikValues,
  updateUser: Function,
  createUser: Function,
  setSubmitError: Function,
  userType: string,
) => {
  const userEmail =
    userType === "consumer" ? formData.email : formData.payerEmail
  try {
    const user = await refetch({
      email: userEmail,
    })
    if (user.data.userByEmail) {
      const updatedUser = await updateUser(
        getUserVariables(formData, userType, user.data.userByEmail.id),
      )
      return updatedUser
    }
  } catch (error) {
    const notFound = error.graphQLErrors[0].extensions.code === "NotFound"
    if (notFound) {
      const createdUser = await createUser(getUserVariables(formData, userType))
      return createdUser
    }
    setSubmitError(error)
    return Promise.reject(error)
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    minWidth: "200px",
  },
}))

type Props = {
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to set a submit error (bool) */
  setSubmitError: Function
}

/**
 * SubmitButton is the button used to submit the order. It
 * appears on the last page of the order form, and it contains the
 * necessary logic for GraphQL queries and mutations.
 */

const SubmitButton = ({ formData, setSubmitError }: Props) => {
  const {
    state: { addedItems },
  } = useCartStore()
  const { emptyCart, getCartTotal } = useCartItems()
  const history = useHistory()
  const [createOrder] = useMutation(CREATE_ORDER)
  const [createUser] = useMutation(CREATE_USER)
  const [updateUser] = useMutation(UPDATE_USER)
  const { refetch } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email: formData.email },
    skip: true, // skip initial fetch, we only want to fetch on button click
  })
  const classes = useStyles()

  const handleSubmit = async () => {
    try {
      // update or create consumer
      await updateOrCreateUser(
        refetch,
        formData,
        updateUser,
        createUser,
        setSubmitError,
        "consumer",
      )
      // update or create payer
      await updateOrCreateUser(
        refetch,
        formData,
        updateUser,
        createUser,
        setSubmitError,
        "payer",
      )
      const order = await createOrder(getOrderVariables(formData, addedItems))
      history.push("/order/submitted", {
        orderID: order.data.createOrder.id,
        formData,
        cartItems: addedItems,
        cartTotal: getCartTotal(addedItems),
      })
      emptyCart()
    } catch (error) {
      setSubmitError(true)
    }
  }

  return (
    <Button
      aria-label="Submit"
      type="submit"
      size="large"
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<FontAwesomeIcon icon="check-circle" />}
      onClick={handleSubmit}>
      Submit Order
    </Button>
  )
}

export { getUserVariables, getIDs }
export default SubmitButton
