import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import LeftColumn from "../LeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"

const paymentAddressFields = [
  "payerFirstName",
  "payerLastName",
  "payerEmail",
  "payerOrganization",
  "payerLab",
  "payerAddress1",
  "payerAddress2",
  "payerCity",
  "payerState",
  "payerZip",
  "payerCountry",
  "payerPhone",
]

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function
  /** Values from Formik */
  values: Object
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
}

/**
 * PaymentPage is the display component for when the user is entering payment information.
 */

const PaymentPage = (props: Props) => {
  const [checkbox, toggleCheckbox] = useState(false)
  const { setFieldValue, values } = props

  const handleChange = () => {
    toggleCheckbox(!checkbox)
    paymentAddressFields.forEach(item => {
      // convert "payerFirstName" to "firstName",  etc
      const convertedVal = item.replace("payer", "")
      const newVal =
        convertedVal.charAt(0).toLowerCase() + convertedVal.slice(1)
      setFieldValue(item, values[newVal])
    })
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
        <LeftColumn
          page="Payment"
          countryName="payerCountry"
          values={values}
          setFieldValue={setFieldValue}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaymentPageRightColumn handleChange={handleChange} {...props} />
      </Grid>
    </Grid>
  )
}

export default PaymentPage
