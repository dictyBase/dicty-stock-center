import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

/**
 * PlasmidCatalogListHeader displays the header at the top of the catalog list
 * display.
 */

const PlasmidCatalogListHeader = () => (
  <>
    <Grid item xs={12} sm={2} lg={3}>
      Plasmid Name
    </Grid>
    <Hidden xsDown>
      <Grid item sm={6}>
        Description
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item sm={2} lg={1}>
        Plasmid ID
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item xs={4} sm={1}></Grid>
    </Hidden>
  </>
)

export default PlasmidCatalogListHeader
