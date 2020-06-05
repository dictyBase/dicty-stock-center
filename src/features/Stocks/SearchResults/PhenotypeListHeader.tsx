import React from "react"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  listHeaders: {
    borderBottom: "1px solid #888",
    backgroundColor: "#f6f9fc",
    color: "#525f7f",
    fontWeight: 600,
  },
  list: {
    padding: 0,
  },
})

const PhenotypeListHeader = () => {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeaders}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} sm={4}>
            Strain Descriptor
          </Grid>
          <Hidden xsDown>
            <Grid item sm={4}>
              Associated Genes
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item lg={4}>
              Publication(s)
            </Grid>
          </Hidden>
        </Grid>
      </ListItem>
    </List>
  )
}

export default PhenotypeListHeader
