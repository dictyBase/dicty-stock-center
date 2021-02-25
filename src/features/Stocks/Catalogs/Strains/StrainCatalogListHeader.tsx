import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

/**
 * StrainCatalogListHeader displays the header at the top of the catalog list
 * display.
 */

const StrainCatalogListHeader = () => (
  <>
    <Grid item xs={12} sm={2}>
      Strain Descriptor
    </Grid>
    <Hidden xsDown>
      <Grid item sm={7}>
        Strain Summary
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item sm={1}>
        Strain ID
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item xs={4} sm={1}></Grid>
    </Hidden>
  </>
)

export default StrainCatalogListHeader
