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
import AddToCartButton from "components/Stocks/CatalogTableItems/AddToCartButton"
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
 * StrainCatalogListItem handles the display of an individual
 * row of data in the strain catalog.
 */

const StrainCatalogListItem = ({
  index,
  style,
  data,
  cartItems,
  removeItem,
}) => {
  const [hover, setHover] = useState(false)
  const classes = useStyles()
  const { item, handleCheckboxChange, checkedItems } = data

  const strain = item[index]

  const toggleHover = () => {
    setHover(!hover)
  }

  // if item is checked, then return true for checkbox
  const checkedItemsLookup = id => checkedItems.some(item => item.id === id)

  // check if hovered item is already in cart
  const selectedCartItems = cartItems.some(item => item.id === strain.id)

  const handleRemoveItemClick = () => {
    removeItem(strain.id)
    setHover(false)
  }

  return (
    <ListItem
      key={strain.id}
      className={classes.row}
      style={style}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <Grid container spacing={0} alignItems="center">
        <Hidden smDown>
          <Grid item md={1}>
            <Checkbox
              checked={checkedItemsLookup(strain.id)}
              onChange={handleCheckboxChange(
                strain.id,
                strain.label,
                strain.summary,
              )}
              color="default"
              value={strain.id}
              inputProps={{
                "aria-label": "Strain catalog checkbox",
              }}
            />
          </Grid>
        </Hidden>
        <Grid item xs={8} md={3} className={classes.item}>
          <Typography noWrap>
            <Link className={classes.link} to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item md={6} className={classes.item}>
            <Typography noWrap>{strain.summary}</Typography>
          </Grid>
        </Hidden>
        <Hidden lgDown>
          <Grid item xl={1}>
            <Typography noWrap>{strain.id}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} md={2} lg={2} xl={1}>
          <Grid container justify="center">
            {hover && (
              <span>
                <AddToCartButton
                  data={[
                    {
                      id: strain.id,
                      label: strain.label,
                      summary: strain.summary,
                    },
                  ]}
                  setHover={setHover}
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
)(StrainCatalogListItem)
