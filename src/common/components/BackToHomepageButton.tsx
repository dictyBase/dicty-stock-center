import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.getContrastText(palette.primary.main),
    backgroundColor: palette.primary.main,
    "&:hover": {
      color: palette.getContrastText(palette.primary.main),
      backgroundColor: palette.primary.dark,
    },
  },
}))

/**
 * BackToHomePageButton is a simple button that links back to the homepage.
 */

const BackToHomePageButton = () => {
  const classes = useStyles()

  return (
    <Button
      classes={{ root: classes.root }}
      component={Link}
      to="/"
      size="small"
      variant="contained"
      color="primary">
      Back to Homepage
    </Button>
  )
}

export default BackToHomePageButton
