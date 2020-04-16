import React from "react"
import Grid from "@material-ui/core/Grid"
import BackButton from "../BackButton"
import SubmitButton from "./SubmitButton"
import { SubmitProps } from "./submitTypes"

/**
 * SubmitPageBottomButtons is the display for the buttons at the bottom of
 * the final submit page.
 */

const SubmitPageBottomButtons = ({
  formData,
  prevStep,
  setSubmitError,
}: SubmitProps) => (
  <Grid container justify="center" spacing={2}>
    <Grid item xs={2} />
    <Grid item xs={4}>
      <BackButton prevStep={prevStep} />
    </Grid>
    <Grid item xs={4}>
      <SubmitButton formData={formData} setSubmitError={setSubmitError} />
    </Grid>
    <Grid item xs={2} />
  </Grid>
)

export default SubmitPageBottomButtons
