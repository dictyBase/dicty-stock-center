import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartTotalRow from "./ShoppingCartTotalRow"
import { useCartStore } from "./CartStore"
import useCartItems from "common/hooks/useCartItems"

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "200px",
    padding: theme.spacing(2),
  },
  checkoutBtn: {
    fontWeight: 1000,
    minHeight: "50px",
    "&:hover": {
      color: "#fff",
    },
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
}))

/**
 * ShoppingCartTotalCard displays information about the cart total with a
 * link to checkout.
 */
const ShoppingCartTotalCard = () => {
  const {
    state: { addedItems },
  } = useCartStore()
  const { getCartTotal } = useCartItems()
  const classes = useStyles()

  const strains = addedItems.filter((item) => item.id.slice(0, 3) === "DBS")
  const plasmids = addedItems.filter((item) => item.id.slice(0, 3) === "DBP")

  return (
    <Card className={classes.container}>
      {strains.length > 0 && (
        <ShoppingCartTotalRow
          leftValue="Strains"
          numItems={strains.length}
          total={getCartTotal(strains)}
          variant="body2"
        />
      )}
      {plasmids.length > 0 && (
        <ShoppingCartTotalRow
          leftValue="Plasmids"
          numItems={plasmids.length}
          total={getCartTotal(plasmids)}
          variant="body2"
        />
      )}
      <Divider className={classes.divider} />
      <ShoppingCartTotalRow
        leftValue="Total"
        numItems={addedItems.length}
        total={getCartTotal(addedItems)}
        variant="h3"
      />
      <CardActions>
        <Button
          component={Link}
          to="/order/checkout"
          color="secondary"
          variant="contained"
          size="large"
          fullWidth
          startIcon={<FontAwesomeIcon icon="shopping-cart" />}
          className={classes.checkoutBtn}>
          Proceed to Checkout
        </Button>
      </CardActions>
    </Card>
  )
}

export default ShoppingCartTotalCard
