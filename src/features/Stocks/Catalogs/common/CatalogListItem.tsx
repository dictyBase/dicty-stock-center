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
import {
  StrainListItemProps,
  PlasmidListItemProps,
  StrainItem,
  PlasmidItem,
} from "features/Stocks/Catalogs/types"
import { fees } from "common/constants/fees"
import useStyles from "features/Stocks/Catalogs/styles"

type Props = StrainListItemProps | PlasmidListItemProps

/**
 * CatalogListItem handles the display of an individual
 * row of data in a stock catalog.
 */

const CatalogListItem = ({ index, style, data }: Props) => {
  const stock = data.item[index]
  const { label } = stock as StrainItem
  const { name } = stock as PlasmidItem
  const stockName = data.stockType === "strains" ? label : name
  const fee = data.stockType === "strains" ? fees.STRAIN_FEE : fees.PLASMID_FEE

  const cartData = {
    id: stock.id,
    name: stockName,
    summary: stock.summary,
    fee: fee,
  }
  const checkboxData = {
    ...cartData,
    in_stock: stock.in_stock,
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
      key={stock.id}
      className={classes.row}
      style={style}
      data-testid={stock.id}
      {...bind}
      dense>
      <Grid container spacing={0} alignItems="center">
        <Hidden xsDown>
          <Grid item sm={1}>
            <Checkbox
              checked={itemIsChecked(checkboxData)}
              onChange={() => handleCheckboxChange(checkboxData)}
              color="default"
              value={stock.id}
              inputProps={{
                "aria-label": "Catalog checkbox",
              }}
            />
          </Grid>
        </Hidden>
        <Grid item xs={8} sm={2} className={classes.item}>
          <Typography noWrap>
            <Link to={`/${data.stockType}/${stock.id}`}>
              {characterConverter(stockName)}
            </Link>
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={7} className={classes.item}>
            <Typography noWrap>{stock.summary}</Typography>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item sm={1}>
            <Typography noWrap>{stock.id}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} sm={1}>
          <Grid container justify="center">
            {hover && (
              <React.Fragment>
                <AddToCartButton
                  data={[cartData]}
                  size={size}
                  inStock={stock.in_stock}
                  setHover={setHover}
                />
                {itemIsInCart(addedItems, stock.id) && (
                  <RemoveFromCartButton handleClick={handleRemoveItemClick} />
                )}
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default CatalogListItem
