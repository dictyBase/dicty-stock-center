import React from "react"
import Box from "@material-ui/core/Box"
import OrderSummary from "./OrderSummary"
import BackButton from "../BackButton"
import SubmitButton from "./SubmitButton"
import { SubmitProps } from "./submitTypes"

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */

const SubmitPage = ({ formData, prevStep, setSubmitError }: SubmitProps) => {
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
