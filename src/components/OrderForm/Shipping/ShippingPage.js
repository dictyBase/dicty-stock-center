// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingAddress from "./ShippingAddress"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * ShippingPage is the display component for when the user is entering shipping information.
 */

const ShippingPage = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { classes, values } = props
  const [pageNum, setPageNum] = props.page

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

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <div className={classes.header}>Please enter shipping information</div>
      </Grid>
      <Grid item xs={6}>
        <PanelWrapper title="Shipping Address">
          <ShippingAddress {...props} />
        </PanelWrapper>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" spacing={16}>
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
              onClick={() => {
                setPageNum(pageNum + 1)
                validationChecker()
              }}>
              Continue &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </Button>
            {modalOpen && (
              <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
                <DialogTitle>{"Validation error"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Some fields are missing. Please ensure that you have filled
                    out all required fields and try again.
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ShippingPage)
