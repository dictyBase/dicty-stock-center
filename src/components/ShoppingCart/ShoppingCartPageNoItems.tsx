import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./shoppingCartStyles"

const ShoppingCartPageNoItems = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={7}>
        <div className={classes.alertBox}>
          <strong>
            <FontAwesomeIcon icon="exclamation-circle" />
          </strong>{" "}
          There are no items in your cart.
        </div>
        <Grid container justify="center">
          <Grid item>
            <h2>Browse our catalogs</h2>
            <ul>
              <li>
                <Link className={classes.catalogLink} to="/strains">
                  Strains Catalog
                </Link>
              </li>
              <li>
                <Link className={classes.catalogLink} to="/plasmids">
                  Plasmids Catalog
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ShoppingCartPageNoItems
