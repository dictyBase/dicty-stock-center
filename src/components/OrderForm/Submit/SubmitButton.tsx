import React from "react"
import { useFormikContext } from "formik"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMutation, useLazyQuery } from "@apollo/react-hooks"
import { useHistory } from "react-router-dom"
import { useCartStore } from "components/ShoppingCart/CartStore"
import useCartItems from "hooks/useCartItems"
import { CREATE_ORDER, CREATE_USER, UPDATE_USER } from "graphql/mutations"
import { GET_USER_BY_EMAIL } from "graphql/queries"
import useStyles from "../formStyles"
import { FormikValues } from "../utils/initialValues"
import { CartItem } from "../types"

const getIDs = (items: Array<CartItem>) =>
  items.map((item: CartItem) => item.id)

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
 * SubmitButton is the button used to submit the order. It
 * appears on the last page of the order form, and it contains the
 * necessary logic for GraphQL queries and mutations.
 */

const SubmitButton = ({ setSubmitError }: { setSubmitError: Function }) => {
  const { isSubmitting, values, submitForm } = useFormikContext<any>()
  const [{ addedItems }] = useCartStore()
  const { emptyCart } = useCartItems(addedItems)
  const history = useHistory()
  const [createOrder] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      setSubmitError(false)
      submitForm()
      history.push("/order/submitted")
      emptyCart()
    },
    onError: () => {
      setSubmitError(true)
    },
  })
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => {
      setSubmitError(false)
      createOrder(getOrderVariables(values, addedItems))
    },
    onError: () => {
      setSubmitError(true)
    },
  })
  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      setSubmitError(false)
      createOrder(getOrderVariables(values, addedItems))
    },
    onError: () => {
      setSubmitError(true)
    },
  })
  const [getUserByEmail] = useLazyQuery(GET_USER_BY_EMAIL, {
    onCompleted: (data) => {
      updateUser(getUserVariables(values, data.userByEmail.id))
      setSubmitError(false)
    },
    onError: (error: any) => {
      if (
        error.graphQLErrors.length > 0 &&
        error.graphQLErrors[0].extensions.code === "NotFound"
      ) {
        setSubmitError(false)
        createUser(getUserVariables(values))
        return
      }
      setSubmitError(true)
    },
  })
  const classes = useStyles()

  const handleSubmit = () => {
    getUserByEmail({
      variables: { email: values.email },
    })
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

export default SubmitButton
