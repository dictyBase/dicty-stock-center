// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./shoppingCartStyles"

type Props = {
  /** List of items in the cart */
  items: Array<{
    id: string,
    name: string,
    fee: string,
  }>,
  /** The type of stock (Strains or Plasmids) */
  stock: string,
  /** Action to remove item from cart */
  removeItem: Function,
  /** Material-UI styling */
  classes: Object,
}

/**
 * ShoppingCartItemsTable displays the list of items currently in the shopping cart.
 */

export const ShoppingCartItemsTable = (props: Props) => {
  const { items, classes, removeItem, stock } = props

  return (
    <Grid container className={classes.itemsContainer}>
      <Grid item xs={12} className={classes.itemsHeader}>
        {stock}
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>ID</h2>
            </TableCell>
            <TableCell>
              <h2>Name</h2>
            </TableCell>
            <TableCell>
              <h2>Fee</h2>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell>
                <Link to={`/${stock.toLowerCase()}/${item.id}`}>{item.id}</Link>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.fee}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.trashBtn}
                  onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon="trash" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  )
}

export default withStyles(styles)(ShoppingCartItemsTable)
