import React from "react"
import Grid from "@material-ui/core/Grid"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ContinueButton from "../ContinueButton"
import OrderFormPanel from "../OrderFormPanel"

/**
 * ShippingPageRightColumn displays the right column of the shipping page.
 */

const ShippingPageRightColumn = () => (
  <>
    <OrderFormPanel title="Shipping Method" component={<ShippingMethod />} />
    <OrderFormPanel
      title="Additional Information"
      component={<AdditionalInformation />}
    />
    <Grid item xs={12}>
      <ContinueButton />
    </Grid>
  </>
)

export default ShippingPageRightColumn
