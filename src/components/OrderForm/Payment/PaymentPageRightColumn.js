// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import useStyles from "../formStyles"

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
  const classes = useStyles()
  const { values, pageNum, setPageNum } = props

  const fields = [
    values.payerFirstName,
    values.payerLastName,
    values.payerEmail,
    values.payerOrganization,
    values.payerLab,
    values.payerAddress1,
    values.payerCity,
    values.payerZip,
    values.payerCountry,
    values.payerPhone,
    values.purchaseOrderNum,
  ]

  return (
    <>
      <Grid item xs={12}>
        <PanelWrapper title="Payment Method">
          <PaymentMethod {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={12}>
        <PaymentInfoBox />
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            className={classes.previousBtn}
            onClick={() => setPageNum(pageNum - 1)}>
            <FontAwesomeIcon icon="arrow-circle-left" />
            &nbsp; Back
          </Button>
        </Grid>
        <Grid item xs={6}>
          <ContinueButton
            fields={fields}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentPageRightColumn
