import React from "react"
import Grid from "@material-ui/core/Grid"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ContinueButton from "../ContinueButton"
import PanelWrapper from "common/components/PanelWrapper"

/**
 * ShippingPageRightColumn displays the right column of the shipping page.
 */

const ShippingPageRightColumn = () => (
  <React.Fragment>
    <Grid item xs={12}>
      <PanelWrapper title="Shipping Method">
        <ShippingMethod />
      </PanelWrapper>
    </Grid>
    <Grid item xs={12}>
      <PanelWrapper title="Additional Information">
        <AdditionalInformation />
      </PanelWrapper>
    </Grid>
    <Grid container item justify="flex-end">
      <ContinueButton />
    </Grid>
  </React.Fragment>
)

export default ShippingPageRightColumn
