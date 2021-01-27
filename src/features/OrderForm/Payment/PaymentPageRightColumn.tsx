import React from "react"
import Grid from "@material-ui/core/Grid"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import BackButton from "../BackButton"
import OrderFormPanel from "../OrderFormPanel"

type Props = {
  /** Function to move to previous step */
  prevStep: Function
}

/**
 * PaymentPageRightColumn displays the right column of the Payment page.
 */

const PaymentPageRightColumn = ({ prevStep }: Props) => (
  <>
    <OrderFormPanel title="Payment Method" component={<PaymentMethod />} />
    <Grid item xs={12}>
      <PaymentInfoBox />
    </Grid>
    <Grid container justify="flex-end">
      <Grid item>
        <BackButton prevStep={prevStep} />
        <ContinueButton />
      </Grid>
    </Grid>
  </>
)

export default PaymentPageRightColumn
