// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "../TextField"
import CountryDropdown from "../CountryDropdown"
import useStyles from "../formStyles"

const fields = [
  {
    name: "payerAddress1",
    field: "Address",
    required: true,
  },
  {
    name: "payerAddress2",
    field: "Address",
    required: false,
  },
  {
    name: "payerCity",
    field: "City",
    required: true,
  },
  {
    name: "payerState",
    field: "State/Province",
    required: false,
  },
  {
    name: "payerZip",
    field: "Zip Code",
    required: true,
  },
]

type Props = {
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  /** Values from Formik */
  values: Object,
}

/**
 * PaymentAddressInformation contains text fields for entering a payer address.
 */

const PaymentAddressInformation = ({ values, setFieldValue }: Props) => {
  const classes = useStyles()

  return (
    <>
      {fields.map((item, index) => (
        <>
          <Grid item xs={12} md={3}>
            {item.required && <span className={classes.requiredText}>*</span>}{" "}
            {item.field}:
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField type="text" name={item.name} />
          </Grid>
        </>
      ))}
      <Grid item xs={12} md={3}>
        <span className={classes.requiredText}>*</span> Country:
      </Grid>
      <Grid item xs={12} md={8} className={classes.selectBox}>
        <CountryDropdown
          value={values.payerCountry}
          name="payerCountry"
          setFieldValue={setFieldValue}
        />
      </Grid>
    </>
  )
}

export default PaymentAddressInformation
