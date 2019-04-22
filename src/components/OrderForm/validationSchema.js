// @flow
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required"),
  organization: Yup.string().required("Organization is required"),
  lab: Yup.string().required("Lab/Group is required"),
  address1: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string().required("Zip code is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
})

export default validationSchema
