import React from "react"
import Box from "@material-ui/core/Box"
import OrderSummary from "./OrderSummary"
import BackButton from "../BackButton"
import SubmitButton from "./SubmitButton"
import { FormikValues } from "../utils/initialValues"

type Props = {
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to move to previous step */
  prevStep: () => void
  /** Function to set a submit error (bool) */
  setSubmitError: (arg0: boolean) => void
}

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */
const SubmitPage = ({ formData, prevStep, setSubmitError }: Props) => {
  return (
    <Box mt={1} mb={2} p={2}>
      <OrderSummary formData={formData} />
      <Box display="flex" justifyContent="flex-end">
        <BackButton prevStep={prevStep} />
        <SubmitButton formData={formData} setSubmitError={setSubmitError} />
      </Box>
    </Box>
  )
}

export default SubmitPage
