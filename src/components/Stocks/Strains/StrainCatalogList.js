import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
// import ListItemAvatar from "@material-ui/core/ListItemAvatar"
// import ListItemIcon from "@material-ui/core/ListItemIcon"
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
// import ListItemText from "@material-ui/core/ListItemText"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import { data } from "./mockStrainCatalogData"

const useStyles = makeStyles({
  container: {
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    "& a": {
      textDecoration: "none",
    },
  },
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

const StrainCatalogList = props => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container} justify="center">
      <Grid item xs={12}>
        <StockDetailsHeader title="Strain Catalog" />
      </Grid>
      <Grid item xs={12}>
        <List>
          <ListItem className={classes.listHeaders}>
            <Grid item xs={3}>
              <strong>Strain Descriptor</strong>
            </Grid>
            <Grid item xs={6}>
              <strong>Strain Summary</strong>
            </Grid>
            <Grid item xs={3}>
              <strong>Strain ID</strong>
            </Grid>
          </ListItem>
          {data.map(item => (
            <ListItem key={item.id} className={classes.listItem}>
              <Grid item xs={3}>
                {item.label}
              </Grid>
              <Grid item xs={6}>
                {item.summary}
              </Grid>
              <Grid item xs={3}>
                {item.id}
              </Grid>
            </ListItem>
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
