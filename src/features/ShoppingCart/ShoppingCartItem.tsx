import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"
import ListItem from "@material-ui/core/ListItem"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import OutlinedDropdown from "common/components/OutlinedDropdown"
import useCartItems from "common/hooks/useCartItems"
import useCartQuantity from "common/hooks/useCartQuantity"
import strainOrPlasmid from "common/utils/strainOrPlasmid"
import { CartItemWithQuantity } from "common/types"

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: theme.palette.primary.light,
  },
  container: {
    minHeight: "200px",
    borderRadius: "0px",
    border: `1px solid ${grey[200]}`,
  },
  fee: {
    color: theme.palette.error.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

type Props = {
  /** Individual cart item with given quantity */
  item: CartItemWithQuantity
}

/**
 * ShoppingCartItem is an individual item displayed in ShoppingCartList.
 */
const ShoppingCartItem = ({ item }: Props) => {
  const { removeFromCart } = useCartItems()
  const { handleChange, matchingItems, values } = useCartQuantity(item.id)
  const classes = useStyles()

  const stock = strainOrPlasmid(item.id)

  return (
    <Card className={classes.container}>
      <CardHeader
        avatar={
          <Avatar aria-label="stock" className={classes.avatar}>
            {stock === "strains" ? "S" : "P"}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="Remove Item"
            onClick={() => removeFromCart(matchingItems)}>
            <FontAwesomeIcon icon="times" />
          </IconButton>
        }
        title={
          <Typography variant="h2">
            <Link to={`/${stock}/${item.id}`}>{item.name}</Link>
          </Typography>
        }
        disableTypography
      />
      <ListItem>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Typography noWrap>
              <em>{item.summary}</em>
            </Typography>
            <Typography noWrap>{item.id}</Typography>
            <Typography
              variant="h3"
              noWrap
              className={classes.fee}
              data-testid="fee">
              ${Number(item.fee) * item.quantity}.00
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            container
            justify="center"
            data-testid="cart-quantity">
            <OutlinedDropdown
              handleChange={handleChange}
              dropdownValues={values}
              inputValue={matchingItems.length}
              label="Qty"
            />
          </Grid>
        </Grid>
      </ListItem>
    </Card>
  )
}

export default ShoppingCartItem
