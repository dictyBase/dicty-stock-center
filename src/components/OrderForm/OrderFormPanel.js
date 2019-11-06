// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import PanelWrapper from "components/common/PanelWrapper"

type Props = {
  title: string,
  component: any,
}

/**
 * OrderFormPanel is an individual panel on any of the order form pages.
 */

const OrderFormPanel = ({ title, component }: Props) => (
  <Grid item xs={12}>
    <PanelWrapper title={title}>{component}</PanelWrapper>
  </Grid>
)

export default OrderFormPanel
