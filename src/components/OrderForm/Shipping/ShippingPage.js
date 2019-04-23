// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
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
  const { classes } = props
  const [pageNum, setPageNum] = props.page

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
              onClick={() => setPageNum(pageNum + 1)}>
              Continue &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ShippingPage)
