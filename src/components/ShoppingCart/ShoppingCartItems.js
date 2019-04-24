// @flow
import React from "react"
import { connect } from "react-redux"
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
import { removeItem } from "actions/cart"

const styles = theme => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
  },
  tableRow: {
    padding: "10px",
  },
  cell: {
    fontSize: "1rem",
  },
  button: {
    minWidth: 0,
  },
})

type Props = {
  /** List of items in the cart */
  items: Array<{
    id: string,
    name: string,
    fee: string,
  }>,
  /** Action to remove item from cart */
  removeItem: Function,
  /** Material-UI styling */
  classes: Object,
}

/**
 * ShoppingCartItems displays the list of items currently in the shopping cart.
 */

const ShoppingCartItems = (props: Props) => {
  const { items, classes } = props

  return (
    <Grid container className={classes.container}>
      <Table>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell>
              <h2>ID</h2>
            </TableCell>
            <TableCell>
              <h2>Strain/Plasmid Name</h2>
            </TableCell>
            <TableCell>
              <h2>Fee</h2>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell className={classes.cell}>
                {item.id.substring(0, 3) === "DBS" ? (
                  <Link to={`/strains/${item.id}`}>{item.id}</Link>
                ) : (
                  <Link to={`/plasmids/${item.id}`}>{item.id}</Link>
                )}
              </TableCell>
              <TableCell className={classes.cell}>{item.name}</TableCell>
              <TableCell className={classes.cell}>{item.fee}</TableCell>
              <TableCell className={classes.cell}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={() => props.removeItem(item.id)}>
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

const mapStateToProps = state => ({
  items: state.cart.addedItems,
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItem(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ShoppingCartItems))
