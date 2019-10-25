// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ContinueButton from "../ContinueButton"

type Props = {
  /** Values from Formik */
  values: Object,
  /** Current order form page number */
  pageNum: number,
  /** Function to set the page number */
  setPageNum: Function,
}

/**
 * ShippingPageRightColumn displays the right column of the shipping page.
 */

const ShippingPageRightColumn = (props: Props) => {
  const { values, pageNum, setPageNum } = props

  const fields = [
    values.firstName,
    values.lastName,
    values.email,
    values.organization,
    values.lab,
    values.address1,
    values.city,
    values.zip,
    values.country,
    values.phone,
    values.shippingAccountNumber,
  ]

  return (
    <>
      <Grid item xs={12}>
        <PanelWrapper title="Shipping Method">
          <ShippingMethod {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={12}>
        <PanelWrapper title="Additional Information">
          <AdditionalInformation {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={12}>
        <ContinueButton
          fields={fields}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </Grid>
    </>
  )
}

export default ShippingPageRightColumn
