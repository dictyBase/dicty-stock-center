import React, { useState } from "react"
import { Form, Formik } from "formik"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import * as Yup from "yup"
import LeftColumn from "../LeftColumn"
import PaymentPageRightColumn from "./PaymentPageRightColumn"
import { FormikValues } from "../utils/initialValues"

const validationSchema = Yup.object().shape({
  payerFirstName: Yup.string().required("First name is required"),
  payerLastName: Yup.string().required("Last name is required"),
  payerEmail: Yup.string().required("Email is required"),
  payerOrganization: Yup.string().required("Organization is required"),
  payerLab: Yup.string().required("Lab/Group is required"),
  payerAddress1: Yup.string().required("Address is required"),
  payerCity: Yup.string().required("City is required"),
  payerZip: Yup.string().required("Zip code is required"),
  payerCountry: Yup.string().required("Country is required"),
  payerPhone: Yup.string().required("Phone number is required"),
  purchaseOrderNum: Yup.string().required("Purchase order number is required"),
})

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
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to set form data */
  setFormData: Function
  /** Function to move to previous step */
  prevStep: Function
  /** Function to move to next step */
  nextStep: Function
}

/**
 * PaymentPage is the display component for when the user is entering payment information.
 */

const PaymentPage = ({ formData, setFormData, prevStep, nextStep }: Props) => {
  const [checkbox, toggleCheckbox] = useState(false)

  const handleChange = (values: any, setFieldValue: any) => {
    toggleCheckbox(!checkbox)
    paymentAddressFields.forEach((item) => {
      // convert "payerFirstName" to "firstName",  etc
      const convertedVal = item.replace("payer", "")
      const newVal =
        convertedVal.charAt(0).toLowerCase() + convertedVal.slice(1)
      setFieldValue(item, values[newVal])
    })
  }

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData(values)
        nextStep()
      }}>
      {({ values, setFieldValue }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox}
                    onChange={() => handleChange(values, setFieldValue)}
                    value="sameAsShipping"
                  />
                }
                label="Same as shipping (click here if payer address is the same as shipping address)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LeftColumn page="Payment" countryName="payerCountry" />
            </Grid>
            <Grid item xs={12} md={6}>
              <PaymentPageRightColumn prevStep={prevStep} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default PaymentPage
