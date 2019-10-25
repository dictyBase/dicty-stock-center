// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ContinueButton from "../ContinueButton"
import requiredFieldsGenerator from "../utils/requiredFields"

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
          fields={requiredFieldsGenerator(values, "shipping")}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </Grid>
    </>
  )
}

export default ShippingPageRightColumn
