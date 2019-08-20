import React from "react"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import StrainCatalogListItem from "./StrainCatalogListItem"

const useStyles = makeStyles({
  catalogPaper: {
    height: 600,
    width: "100%",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
  },
})

const StrainCatalogList = ({ data }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.catalogPaper}>
      <List>
        <ListItem className={classes.listHeaders}>
          <Grid container>
            <Grid item xs={3}>
              <strong>Strain Descriptor</strong>
            </Grid>
            <Grid item xs={7}>
              <strong>Strain Summary</strong>
            </Grid>
            <Grid item xs={2}>
              <strong>Strain ID</strong>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={515}
            width={width}
            itemSize={50}
            itemCount={data.length}
            itemData={data}>
            {StrainCatalogListItem}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Paper>
  )
}

export default StrainCatalogList
