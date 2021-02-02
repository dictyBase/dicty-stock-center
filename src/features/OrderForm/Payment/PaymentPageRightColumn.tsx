import React from "react"
import Grid from "@material-ui/core/Grid"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import BackButton from "../BackButton"
import PanelWrapper from "common/components/PanelWrapper"

type Props = {
  /** Function to move to previous step */
  prevStep: () => void
}

/**
 * PaymentPageRightColumn displays the right column of the Payment page.
 */

const PaymentPageRightColumn = ({ prevStep }: Props) => (
  <React.Fragment>
    <Grid item xs={12}>
      <PanelWrapper title="Payment Method">
        <PaymentMethod />
      </PanelWrapper>
    </Grid>
    <Grid item xs={12}>
      <PaymentInfoBox />
    </Grid>
    <Grid container justify="flex-end">
      <Grid item>
        <BackButton prevStep={prevStep} />
        <ContinueButton />
      </Grid>
    </Grid>
  </React.Fragment>
)

export default PaymentPageRightColumn
