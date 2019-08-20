import React, { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
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

const StrainCatalogList = ({ index, style, data }) => {
  const [hover, setHover] = useState(false)
  const classes = useStyles()

  const item = data[index]

  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <ListItem
      key={item.id}
      className={classes.listItem}
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <Grid container>
        <Grid item xs={3}>
          <Typography noWrap>
            <Link to={`/strains/${item.id}`}>{item.label}</Link>
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography noWrap>{item.summary}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography noWrap>
            {hover ? (
              <span>
                {item.id} &nbsp;
                <AddToCartButton id={item.id} label={item.label} />
              </span>
            ) : (
              item.id
            )}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default StrainCatalogList
