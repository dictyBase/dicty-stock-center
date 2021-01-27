import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(() => ({
  button: {
    minWidth: "250px",
  },
}))

const EmptyCartPage = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box marginTop={4} marginBottom={4}>
        <Typography variant="body1">
          Your shopping cart is empty. Please add at least one item to your cart
          before checking out.
        </Typography>
      </Box>
      <Typography variant="h2">Browse our catalogs</Typography>
      <Box marginTop={4} marginBottom={3}>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          component={Link}
          to="/strains">
          Strain Catalog
        </Button>
      </Box>
      <Box marginBottom={4}>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          component={Link}
          to="/plasmids">
          Plasmid Catalog
        </Button>
      </Box>
      <Divider />
    </React.Fragment>
  )
}

export default EmptyCartPage
