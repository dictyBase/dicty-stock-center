import React from "react"
import Grid from "@material-ui/core/Grid"
import ShoppingCartItemList from "features/ShoppingCart/ShoppingCartItemList"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import useStyles from "../formStyles"
import { FormikValues } from "../utils/initialValues"

type Props = {
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to move to previous step */
  prevStep: Function
  /** Function to set a submit error (bool) */
  setSubmitError: Function
}

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */

export const SubmitPage = ({ formData, prevStep, setSubmitError }: Props) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.innerForm}>
      <Grid item xs={12}>
        <div className={classes.submitPage}>
          <Grid container justify="center">
            <ShoppingCartItemList />
          </Grid>
        </div>
        <SubmitPageBottomButtons
          formData={formData}
          prevStep={prevStep}
          setSubmitError={setSubmitError}
        />
      </Grid>
    </Grid>
  )
}

export default SubmitPage
