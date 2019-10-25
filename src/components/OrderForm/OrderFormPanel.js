// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import PanelWrapper from "components/common/PanelWrapper"

type Props = {
  /** Values from Formik */
  values: Object,
  /** Current order form page number */
  pageNum: number,
  /** Function to set the page number */
  setPageNum: Function,
}

/**
 * OrderFormPanel is an individual panel on any of the order form pages.
 */

const OrderFormPanel = (props: Props) => {
  const { title, component } = props

  return (
    <Grid item xs={12}>
      <PanelWrapper title={title}>{component}</PanelWrapper>
    </Grid>
  )
}

export default OrderFormPanel
