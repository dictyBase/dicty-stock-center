import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import StrainCatalogListItem from "./StrainCatalogListItem"

const useStyles = makeStyles({
  listHeaders: {
    position: "sticky",
    top: 0,
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
    <Grid container justify="center">
      <Grid item xs={12}>
        <List>
          <ListItem className={classes.listHeaders}>
            <Grid item xs={3}>
              <strong>Strain Descriptor</strong>
            </Grid>
            <Grid item xs={8}>
              <strong>Strain Summary</strong>
            </Grid>
            <Grid item xs={1}>
              <strong>Strain ID</strong>
            </Grid>
          </ListItem>
          {data.map(item => (
            <StrainCatalogListItem key={item.id} item={item} />
          ))}
        </List>
        <Grid item xs={12}>
          <Link to="/strains">Old Strain Catalog</Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StrainCatalogList
