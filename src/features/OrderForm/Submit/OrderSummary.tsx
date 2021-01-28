import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import { FormikValues } from "../utils/initialValues"

// generate array of strings to display for shipping section
const getShippingValues = ({
  firstName,
  lastName,
  address1,
  address2,
  organization,
  lab,
  city,
  country,
  state,
  zip,
  phone,
  email,
  shippingAccount,
  shippingAccountNumber,
}: FormikValues) => {
  const name = `${firstName} ${lastName}`
  // only show second address line if it exists
  const address = address2 !== "" ? `${address1}, ${address2}` : address1
  // only show state if it exists
  const cityStateZip =
    state !== ""
      ? `${city}, ${state}, ${country} ${zip}`
      : `${city}, ${country} ${zip}`
  // show account + number unless prepaid
  const shippingAcct =
    shippingAccount === "prepaid"
      ? shippingAccountNumber
      : `${shippingAccount} ${shippingAccountNumber}`

  return [
    name,
    organization,
    lab,
    address,
    cityStateZip,
    phone,
    email,
    shippingAcct,
  ]
}

// generate array of strings to display for payment section
const getPaymentValues = ({
  payerFirstName,
  payerLastName,
  payerLab,
  payerOrganization,
  payerAddress1,
  payerAddress2,
  payerCity,
  payerState,
  payerCountry,
  payerZip,
  payerPhone,
  payerEmail,
  paymentMethod,
  purchaseOrderNum,
}: FormikValues) => {
  const name = `${payerFirstName} ${payerLastName}`
  // only show second address line if it exists
  const address =
    payerAddress2 !== "" ? `${payerAddress1}, ${payerAddress2}` : payerAddress1
  // only show state if it exists
  const cityStateZip =
    payerState !== ""
      ? `${payerCity}, ${payerState}, ${payerCountry} ${payerZip}`
      : `${payerCity}, ${payerCountry} ${payerZip}`
  // show account + number unless prepaid
  const payment =
    purchaseOrderNum !== "N/A"
      ? `${paymentMethod} ${purchaseOrderNum}`
      : paymentMethod

  return [
    name,
    payerOrganization,
    payerLab,
    address,
    cityStateZip,
    payerPhone,
    payerEmail,
    payment,
  ]
}

const useStyles = makeStyles((theme) => ({
  details: {
    marginBottom: theme.spacing(3),
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}))

type Props = {
  /** Object containing all entered form data */
  formData: FormikValues
}

const OrderSummary = ({ formData }: Props) => {
  const classes = useStyles()
  const { state } = useCartStore()
  const { getCartTotal } = useCartItems()

  return (
    <React.Fragment>
      <Typography variant="h2" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {state.addedItems.map((item, index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText primary={item.name} secondary={item.id} />
            <Typography variant="body2">{item.fee}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h3" className={classes.total}>
                Total
              </Typography>
            }
          />
          <Typography variant="h3" className={classes.total}>
            {getCartTotal(state.addedItems)}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Grid container spacing={2} className={classes.details}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Shipping Address
          </Typography>
          {getShippingValues(formData).map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Payment Details
          </Typography>
          {getPaymentValues(formData).map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default OrderSummary
