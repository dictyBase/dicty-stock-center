import React from "react"
import Grid from "@material-ui/core/Grid"
import OrderSummary from "./OrderSummary"
import BackButton from "../BackButton"
import SubmitButton from "./SubmitButton"
import useStyles from "../formStyles"
import { SubmitProps } from "./submitTypes"

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */

const SubmitPage = ({ formData, prevStep, setSubmitError }: SubmitProps) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.innerForm}>
      <Grid item xs={12}>
        <OrderSummary formData={formData} />
        <Grid container justify="flex-end">
          <Grid item>
            <BackButton prevStep={prevStep} />
            <SubmitButton formData={formData} setSubmitError={setSubmitError} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SubmitPage
