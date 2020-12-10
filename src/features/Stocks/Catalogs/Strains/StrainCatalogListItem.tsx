import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useCheckboxes from "common/hooks/useCheckboxes"
import useCartItems from "common/hooks/useCartItems"
import useHover from "common/hooks/useHover"
import { useCartStore } from "features/ShoppingCart/CartStore"
import AddToCartButton from "features/Stocks/Catalogs/common/AddToCartButton"
import characterConverter from "common/utils/characterConverter"
import itemIsInCart from "common/utils/itemIsInCart"
import { StrainListItemProps } from "features/Stocks/Catalogs/types/list"
import useStyles from "features/Stocks/Catalogs/styles"

/**
 * StrainCatalogListItem handles the display of an individual
 * row of data in the strain catalog.
 */

const StrainCatalogListItem = ({ index, style, data }: StrainListItemProps) => {
  const strain = data.item[index]
  const cartData = {
    id: strain.id,
    name: strain.label,
    summary: strain.summary,
  }
  const checkboxData = {
    ...cartData,
    in_stock: strain.in_stock,
  }
  const { handleCheckboxChange, itemIsChecked } = useCheckboxes(checkboxData)
  const [{ addedItems }] = useCartStore()
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
      key={strain.id}
      className={classes.row}
      style={style}
      {...bind}
      dense>
      <Grid container spacing={0} alignItems="center">
        <Hidden xsDown>
          <Grid item sm={1}>
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
        <Grid item xs={8} sm={2} md={3} className={classes.item}>
          <Typography noWrap>
            <Link to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={6} md={5} lg={6} className={classes.item}>
            <Typography noWrap>{strain.summary}</Typography>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item sm={2} lg={1}>
            <Typography noWrap>{strain.id}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} sm={1}>
          <Grid container justify="center">
            {hover && (
              <span>
                <AddToCartButton
                  size={size}
                  data={[cartData]}
                  inStock={strain.in_stock}
                />
                {itemIsInCart(addedItems, strain.id) && (
                  <IconButton
                    color="secondary"
                    size={size}
                    onClick={handleRemoveItemClick}>
                    <FontAwesomeIcon
                      icon="trash"
                      size={smallWindow ? "xs" : "sm"}
                    />
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

export default StrainCatalogListItem
