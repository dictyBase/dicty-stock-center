// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import useStyles from "./phenotypeStyles"

/**
 * PhenotypeListListHeader contains the list of headers at the
 * top of the phenotype display.
 */

const PhenotypeListListHeader = () => {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeaders}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={3}>
            Phenotype
          </Grid>
          <Grid item xs={3}>
            Notes
          </Grid>
          <Grid item xs={3}>
            Assay & Environment
          </Grid>
          <Grid item xs={3}>
            Reference(s)
          </Grid>
        </Grid>
      </ListItem>
    </List>
  )
}

export default PhenotypeListListHeader
