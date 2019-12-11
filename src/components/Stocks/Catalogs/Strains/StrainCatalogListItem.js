// @flow
import React, { useState, memo } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { areEqual } from "react-window"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useCheckboxes from "hooks/useCheckboxes"
import useCartItems from "hooks/useCartItems"
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import characterConverter from "components/Stocks/utils/characterConverter"
import { removeItem } from "actions/cart"
import { listItemProps } from "components/Stocks/Catalogs/types/list"
import useStyles from "components/Stocks/Catalogs/styles"

/**
 * StrainCatalogListItem handles the display of an individual
 * row of data in the strain catalog.
 */

const StrainCatalogListItem = memo<*>(
  ({ index, style, data }: listItemProps) => {
    const { item } = data
    const strain = item[index]
    const cartData = {
      id: strain.id,
      name: strain.label,
      summary: strain.summary,
    }
    // need to keep hover state localized, otherwise
    // it will hover for every item at the same time
    const [hover, setHover] = useState(false)
    const { handleCheckboxChange, itemIsChecked } = useCheckboxes(cartData)
    const { itemIsInCart } = useCartItems(strain.id)
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleRemoveItemClick = () => {
      dispatch(removeItem(strain.id))
      setHover(false)
    }

    return (
      <ListItem
        key={strain.id}
        className={classes.row}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Grid container spacing={0} alignItems="center">
          <Hidden smDown>
            <Grid item md={1}>
              <Checkbox
                checked={itemIsChecked}
                onChange={handleCheckboxChange}
                color="default"
                value={strain.id}
                inputProps={{
                  "aria-label": "Strain catalog checkbox",
                }}
              />
            </Grid>
          </Hidden>
          <Grid item xs={8} sm={4} md={3} className={classes.item}>
            <Typography noWrap>
              <Link className={classes.link} to={`/strains/${strain.id}`}>
                {characterConverter(strain.label)}
              </Link>
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={6} className={classes.item}>
              <Typography noWrap>{strain.summary}</Typography>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item lg={1}>
              <Typography noWrap>{strain.id}</Typography>
            </Grid>
          </Hidden>
          <Grid item xs={4} sm={2} md={2} lg={1}>
            <Grid container justify="center">
              {hover && (
                <span>
                  <AddToCartButton
                    data={[cartData]}
                    setHover={setHover}
                    stockType="strain"
                  />
                  {itemIsInCart && (
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
  },
  areEqual,
)

export default StrainCatalogListItem
