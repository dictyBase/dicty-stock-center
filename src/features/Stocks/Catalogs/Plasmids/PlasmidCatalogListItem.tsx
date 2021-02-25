import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import Hidden from "@material-ui/core/Hidden"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import AddToCartButton from "features/Stocks/Catalogs/common/AddToCartButton"
import RemoveFromCartButton from "features/Stocks/Catalogs/common/RemoveFromCartButton"
import characterConverter from "common/utils/characterConverter"
import useCheckboxes from "common/hooks/useCheckboxes"
import useCartItems from "common/hooks/useCartItems"
import useHover from "common/hooks/useHover"
import { useCartStore } from "features/ShoppingCart/CartStore"
import itemIsInCart from "common/utils/itemIsInCart"
import { fees } from "common/constants/fees"
import { PlasmidListItemProps } from "features/Stocks/Catalogs/types"
import useStyles from "features/Stocks/Catalogs/styles"

/**
 * PlasmidCatalogListItem handles the display of an individual
 * row of data in the plasmid catalog.
 */

const PlasmidCatalogListItem = ({
  index,
  style,
  data,
}: PlasmidListItemProps) => {
  const plasmid = data.item[index]
  const cartData = {
    id: plasmid.id,
    name: plasmid.name,
    summary: plasmid.summary,
    fee: fees.PLASMID_FEE,
  }
  const checkboxData = {
    ...cartData,
    in_stock: plasmid.in_stock,
  }
  const { handleCheckboxChange, itemIsChecked } = useCheckboxes()
  const {
    state: { addedItems },
  } = useCartStore()
  const { removeFromCart } = useCartItems()
  const { hover, setHover, bind } = useHover()
  const theme = useTheme()
  const smallWindow = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()

  const handleRemoveItemClick = () => {
    removeFromCart([cartData])
    setHover(false)
  }

  const size = smallWindow ? "small" : "medium"

  return (
    <ListItem
      key={plasmid.id}
      className={classes.row}
      style={style}
      {...bind}
      dense>
      <Grid container spacing={0} alignItems="center">
        <Hidden xsDown>
          <Grid item sm={1}>
            <Checkbox
              checked={itemIsChecked(checkboxData)}
              onChange={() => handleCheckboxChange(checkboxData)}
              color="default"
              value={plasmid.id}
              inputProps={{
                "aria-label": "Plasmid catalog checkbox",
              }}
            />
          </Grid>
        </Hidden>
        <Grid item xs={8} sm={2} className={classes.item}>
          <Typography noWrap>
            <Link to={`/plasmids/${plasmid.id}`}>
              {characterConverter(plasmid.name)}
            </Link>
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={7} className={classes.item}>
            <Typography noWrap>{plasmid.summary}</Typography>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item sm={1}>
            <Typography noWrap>{plasmid.id}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} sm={1}>
          <Grid container justify="center">
            {hover && (
              <span>
                <AddToCartButton
                  data={[cartData]}
                  size={size}
                  inStock={plasmid.in_stock}
                />
                {itemIsInCart(addedItems, plasmid.id) && (
                  <RemoveFromCartButton handleClick={handleRemoveItemClick} />
                )}
              </span>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PlasmidCatalogListItem
