// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "components/Stocks/CatalogPageItems/AddToCartButton"
import characterConverter from "components/Stocks/utils/characterConverter"
import { removeItem } from "actions/cart"

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

/**
 * PlasmidCatalogListItem handles the display of an individual
 * row of data in the plasmid catalog.
 */

export const PlasmidCatalogListItem = ({
  index,
  style,
  data,
  cartItems,
  removeItem,
}) => {
  const [hover, setHover] = useState(false)
  const classes = useStyles()
  const { item, handleCheckboxChange, checkedItems } = data

  const plasmid = item[index]

  const toggleHover = () => {
    setHover(!hover)
  }

  // if item is checked, then return true for checkbox
  const checkedItemsLookup = id => checkedItems.some(item => item.id === id)

  // check if hovered item is already in cart
  const selectedCartItems = cartItems.some(item => item.id === plasmid.id)

  const handleRemoveItemClick = () => {
    removeItem(plasmid.id)
    setHover(false)
  }

  return (
    <ListItem
      key={plasmid.id}
      className={classes.row}
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <Grid container spacing={0} alignItems="center">
        <Hidden smDown>
          <Grid item md={1}>
            <Checkbox
              checked={checkedItemsLookup(plasmid.id)}
              onChange={handleCheckboxChange(
                plasmid.id,
                plasmid.name,
                plasmid.summary,
              )}
              color="default"
              value={plasmid.id}
              inputProps={{
                "aria-label": "Plasmid catalog checkbox",
              }}
            />
          </Grid>
        </Hidden>
        <Grid item xs={8} md={2} className={classes.item}>
          <Typography noWrap>
            <Link className={classes.link} to={`/plasmids/${plasmid.id}`}>
              {characterConverter(plasmid.name)}
            </Link>
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item md={7} className={classes.item}>
            <Typography noWrap>{plasmid.summary}</Typography>
          </Grid>
        </Hidden>
        <Hidden lgDown>
          <Grid item xl={1}>
            <Typography noWrap>{plasmid.id}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} md={2} lg={2} xl={1}>
          <Grid container justify="center">
            {hover && (
              <span>
                <AddToCartButton
                  data={[
                    {
                      id: plasmid.id,
                      label: plasmid.name,
                      summary: plasmid.summary,
                    },
                  ]}
                  setHover={setHover}
                  stockType="plasmid"
                />
                {selectedCartItems && (
                  <IconButton
                    size="medium"
                    color="secondary"
                    onClick={handleRemoveItemClick}>
                    <FontAwesomeIcon icon="trash" />
                  </IconButton>
                )}
              </span>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.addedItems,
})

export default connect(
  mapStateToProps,
  { removeItem },
)(PlasmidCatalogListItem)
