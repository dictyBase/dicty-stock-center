import React from "react"
import { useFormikContext } from "formik"
import Grid from "@material-ui/core/Grid"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ContinueButton from "../ContinueButton"
import OrderFormPanel from "../OrderFormPanel"
import requiredFieldsGenerator from "../utils/requiredFields"

type Props = {
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
}

/**
 * ShippingPageRightColumn displays the right column of the shipping page.
 */

const ShippingPageRightColumn = ({ pageNum, setPageNum }: Props) => {
  const { values } = useFormikContext<any>()

  return (
    <>
      <OrderFormPanel title="Shipping Method" component={<ShippingMethod />} />
      <OrderFormPanel
        title="Additional Information"
        component={<AdditionalInformation />}
      />
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
