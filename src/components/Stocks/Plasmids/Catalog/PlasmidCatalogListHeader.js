// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

/**
 * PlasmidCatalogListHeader displays the header at the top of the catalog list
 * display.
 */

const PlasmidCatalogListHeader = () => (
  <>
    <Grid item xs={12} md={2}>
      Plasmid Name
    </Grid>
    <Hidden smDown>
      <Grid item md={7}>
        Description
      </Grid>
    </Hidden>
    <Hidden lgDown>
      <Grid item xl={1}>
        Plasmid ID
      </Grid>
    </Hidden>
    <Hidden smDown>
      <Grid item xs={4} md={1}></Grid>
    </Hidden>
  </>
)

export default PlasmidCatalogListHeader
