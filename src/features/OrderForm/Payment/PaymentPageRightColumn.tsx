import React from "react"
import { useFormikContext } from "formik"
import Grid from "@material-ui/core/Grid"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import BackButton from "../BackButton"
import OrderFormPanel from "../OrderFormPanel"
import requiredFieldsGenerator from "../utils/requiredFields"

type Props = {
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
}

/**
 * PaymentPageRightColumn displays the right column of the Payment page.
 */

const PaymentPageRightColumn = ({ pageNum, setPageNum }: Props) => {
  const { values } = useFormikContext<any>()

  return (
    <>
      <OrderFormPanel title="Payment Method" component={<PaymentMethod />} />
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
    </>
  )
}

export default PaymentPageRightColumn
