import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TrashButton from "common/components/TrashButton"
import useCartItems from "common/hooks/useCartItems"
import strainOrPlasmid from "common/utils/strainOrPlasmid"
import useStyles from "./shoppingCartStyles"

type Props = {
  item: {
    name: string
    id: string
    summary: string
    fee: string
  }
}

/**
 * ShoppingCartItem is an individual item displayed in ShoppingCartList.
 */

const ShoppingCartItem = ({ item }: Props) => {
  const { removeFromCart } = useCartItems([item])
  const classes = useStyles()

  return (
    <>
      <ListItem>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={10}>
            <Typography noWrap>
              <strong>
                <Link to={`/${strainOrPlasmid(item.id)}/${item.id}`}>
                  {item.name}
                </Link>
              </strong>
              <br />
              <em>{item.summary}</em>
              <br />
              {item.id}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography noWrap>${item.fee}</Typography>
          </Grid>
          <Grid item xs={1}>
            <TrashButton
              variant="contained"
              className={classes.trashBtn}
              onClick={removeFromCart}>
              <FontAwesomeIcon icon="trash" />
            </TrashButton>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  )
}

export default ShoppingCartItem
