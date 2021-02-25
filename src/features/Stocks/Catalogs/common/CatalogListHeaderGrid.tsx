import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

type Props = {
  /** List header values to display */
  values: Array<string>
}

/**
 * CatalogListHeaderGrid displays the header row at the top of the catalog list
 * display.
 */

const CatalogListHeaderGrid = ({ values }: Props) => (
  <React.Fragment>
    <Grid item xs={12} sm={2}>
      {values[0]}
    </Grid>
    <Hidden xsDown>
      <Grid item sm={7}>
        {values[1]}
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item sm={1}>
        {values[2]}
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item xs={4} sm={1}></Grid>
    </Hidden>
  </React.Fragment>
)

export default CatalogListHeaderGrid
