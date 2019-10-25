// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import BackButton from "../BackButton"
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
 * PaymentPageRightColumn displays the right column of the Payment page.
 */

const PaymentPageRightColumn = (props: Props) => {
  const { values, pageNum, setPageNum } = props

  return (
    <Fragment>
      <Grid item xs={12}>
        <PanelWrapper title="Payment Method">
          <PaymentMethod {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={12}>
        <PaymentInfoBox />
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <BackButton pageNum={pageNum} setPageNum={setPageNum} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContinueButton
            fields={requiredFieldsGenerator(values, "payment")}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default PaymentPageRightColumn
