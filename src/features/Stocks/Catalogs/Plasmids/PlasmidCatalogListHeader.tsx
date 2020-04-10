import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

/**
 * PlasmidCatalogListHeader displays the header at the top of the catalog list
 * display.
 */

const PlasmidCatalogListHeader = () => (
  <>
    <Grid item xs={12} sm={3} md={2}>
      Plasmid Name
    </Grid>
    <Hidden xsDown>
      <Grid item sm={7}>
        Description
      </Grid>
    </Hidden>
    <Hidden mdDown>
      <Grid item lg={1}>
        Plasmid ID
      </Grid>
    </Hidden>
    <Hidden smDown>
      <Grid item xs={4} sm={2} md={2} lg={1}></Grid>
    </Hidden>
  </>
)

export default PlasmidCatalogListHeader
