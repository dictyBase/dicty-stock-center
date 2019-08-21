import React, { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import AddToCartButton from "components/Stocks/CatalogTableItems/AddToCartButton"
import characterConverter from "components/Stocks/utils/characterConverter"

const useStyles = makeStyles({
  listHeaders: {
    position: "sticky",
    top: 0,
  },
  row: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",

    "&:hover": {
      backgroundColor: "#eeeeee",
      boxShadow:
        "inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)",
      zIndex: 1,
    },
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  item: {
    paddingRight: "10px",
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
      className={classes.row}
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <Grid container>
        <Grid item xs={3} className={classes.item}>
          <Typography noWrap>
            <Link className={classes.link} to={`/strains/${item.id}`}>
              {characterConverter(item.label)}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={7} className={classes.item}>
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
