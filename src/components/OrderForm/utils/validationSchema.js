// @flow
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email()
    .required("Email is required"),
  organization: Yup.string().required("Organization is required"),
  lab: Yup.string().required("Lab/Group is required"),
  address1: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string().required("Zip code is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
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
  shippingAccountNumber: Yup.string().required(
    "Shipping account number is required",
  ),
  purchaseOrderNum: Yup.string().required("Purchase order number is required"),
})

export default validationSchema
