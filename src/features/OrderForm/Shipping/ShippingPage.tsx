import React from "react"
import { Form, Formik } from "formik"
import Grid from "@material-ui/core/Grid"
import * as Yup from "yup"
import LeftColumn from "../LeftColumn"
import ShippingPageRightColumn from "./ShippingPageRightColumn"
import { FormikValues } from "../utils/initialValues"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  organization: Yup.string().required("Organization is required"),
  lab: Yup.string().required("Lab/Group is required"),
  address1: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string().required("Zip code is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
  shippingAccountNumber: Yup.string().required(
    "Shipping account number is required",
  ),
})

type Props = {
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to set form data */
  setFormData: (arg0: FormikValues) => void
  /** Function to move to next step */
  nextStep: () => void
}

/**
 * ShippingPage is the display component for when the user is entering shipping information.
 */

const ShippingPage = ({ formData, setFormData, nextStep }: Props) => (
  <Formik
    initialValues={formData}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      setFormData(values)
      nextStep()
    }}>
    {() => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LeftColumn page="Shipping" countryName="country" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <ShippingPageRightColumn />
            </Grid>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
)

export default ShippingPage
