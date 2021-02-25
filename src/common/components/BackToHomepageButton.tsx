import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    "&:hover": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
}))

/**
 * BackToHomepageButton is a simple button that links back to the homepage.
 */

const BackToHomepageButton = () => {
  const classes = useStyles()

  return (
    <Button
      classes={{ root: classes.root }}
      component={Link}
      to="/"
      size="medium"
      variant="contained"
      color="primary">
      Back to DSC Homepage
    </Button>
  )
}

export default BackToHomepageButton
