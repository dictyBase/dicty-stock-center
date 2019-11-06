// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

/**
 * StrainCatalogListHeader displays the header at the top of the catalog list
 * display.
 */

const StrainCatalogListHeader = () => (
  <>
    <Grid item xs={12} md={3}>
      Strain Descriptor
    </Grid>
    <Hidden smDown>
      <Grid item md={6}>
        Strain Summary
      </Grid>
    </Hidden>
    <Hidden lgDown>
      <Grid item xl={1}>
        Strain ID
      </Grid>
    </Hidden>
    <Hidden smDown>
      <Grid item xs={4} md={1}></Grid>
    </Hidden>
  </>
)

export default StrainCatalogListHeader
