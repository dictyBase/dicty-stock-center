// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import ContinueButton from "../ContinueButton"
import requiredFieldsGenerator from "../utils/requiredFields"
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
  console.log(requiredFieldsGenerator(values, "payment"))
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
