import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Alert from "@material-ui/lab/Alert"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  alert: {
    marginBottom: "20px",
  },
}))

const ShoppingCartPageNoItems = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Grid item>
        <Alert className={classes.alert} severity="error">
          There are no items in your cart.
        </Alert>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h2">Browse our catalogs</Typography>
            <ul>
              <li>
                <Link to="/strains">Strains Catalog</Link>
              </li>
              <li>
                <Link to="/plasmids">Plasmids Catalog</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ShoppingCartPageNoItems
