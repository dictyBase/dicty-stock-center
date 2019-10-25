// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import PaymentPageLeftColumn from "./PaymentPageLeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  /** Values from Formik */
  values: Object,
}

/**
 * PaymentPage is the display component for when the user is entering payment information.
 */

const PaymentPage = (props: Props) => {
  const [checkbox, toggleCheckbox] = useState(false)
  const { setFieldValue, values } = props

  const handleChange = () => {
    toggleCheckbox(!checkbox)
    setFieldValue("payerFirstName", values.firstName)
    setFieldValue("payerLastName", values.lastName)
    setFieldValue("payerEmail", values.email)
    setFieldValue("payerOrganization", values.organization)
    setFieldValue("payerLab", values.lab)
    setFieldValue("payerAddress1", values.address1)
    setFieldValue("payerAddress2", values.address2)
    setFieldValue("payerCity", values.city)
    setFieldValue("payerState", values.state)
    setFieldValue("payerZip", values.zip)
    setFieldValue("payerCountry", values.country)
    setFieldValue("payerPhone", values.phone)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkbox}
              onChange={handleChange}
              value="sameAsShipping"
            />
          }
          label="Same as shipping (click here if payer address is the same as shipping address)"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaymentPageLeftColumn {...props} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaymentPageRightColumn {...props} />
      </Grid>
    </Grid>
  )
}

export default PaymentPage
