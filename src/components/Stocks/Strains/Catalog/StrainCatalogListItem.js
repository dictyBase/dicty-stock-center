import React, { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
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
  const { item, handleChange } = data

  const strain = item[index]

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
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Checkbox
            onChange={handleChange(strain.id)}
            color="default"
            value={strain.id}
            inputProps={{
              "aria-label": "checkbox header",
            }}
          />
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography noWrap>
            <Link className={classes.link} to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.item}>
          <Typography noWrap>{strain.summary}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography noWrap>{strain.id}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Grid container justify="center">
            {hover ? (
              <span>
                <AddToCartButton id={strain.id} label={strain.label} />
              </span>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default StrainCatalogList
