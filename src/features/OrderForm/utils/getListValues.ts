import { capitalizeFirstCharacter } from "common/utils/stringCapitalizations"
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
    capitalizeFirstCharacter(shippingAcct),
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
    capitalizeFirstCharacter(payment),
  ]
}

export { getShippingValues, getPaymentValues }
