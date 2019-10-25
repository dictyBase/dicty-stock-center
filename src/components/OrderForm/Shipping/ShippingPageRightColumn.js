// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import ValidationDialog from "../ValidationDialog"
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
 * ShippingPageRightColumn displays the right column of the shipping page.
 */

const ShippingPageRightColumn = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const classes = useStyles()
  const { values, pageNum, setPageNum } = props

  const validationChecker = () => {
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
    if (fields.includes("")) {
      setModalOpen(true)
      setPageNum(0)
    }
  }

  const handleContinueClick = () => {
    setPageNum(pageNum + 1)
    validationChecker()
  }

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
        <Button
          size="large"
          className={classes.continueBtn}
          onClick={handleContinueClick}>
          Continue &nbsp;
          <FontAwesomeIcon icon="arrow-circle-right" />
        </Button>
        {modalOpen && (
          <ValidationDialog modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </Grid>
    </>
  )
}

export default ShippingPageRightColumn
