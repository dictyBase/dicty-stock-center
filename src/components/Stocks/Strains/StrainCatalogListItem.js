import React, { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import AddToCartButton from "components/Stocks/CatalogTableItems/AddToCartButton"

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

const StrainCatalogList = ({ item }) => {
  const [hover, setHover] = useState(false)
  const classes = useStyles()

  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <ListItem
      key={item.id}
      className={classes.listItem}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <Grid item xs={3}>
        <Link to={`/${item.id}`}>{item.label}</Link>
      </Grid>
      <Grid item xs={8}>
        {item.summary}
      </Grid>
      <Grid item xs={1}>
        {hover ? <AddToCartButton /> : item.id}
      </Grid>
    </ListItem>
  )
}

export default StrainCatalogList
