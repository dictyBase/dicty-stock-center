import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ErrorOutline from "@material-ui/icons/ErrorOutline"
import sadDicty from "common/assets/sad-dicty.png"

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    paddingRight: theme.spacing(1),
  },
  button: {
    minWidth: "250px",
    minHeight: "50px",
    textTransform: "none",
  },
}))

/**
 * PageNotFound is a fallback component for non-existent routes.
 */

const PageNotFound = () => {
  const classes = useStyles()

  return (
    <Box
      py={4}
      mt={2}
      borderRadius={5}
      bgcolor="#eff8fb"
      textAlign="center"
      minHeight={450}>
      <img src={sadDicty} alt="Sad Dicty Logo" />
      <Box py={2} display="flex" alignItems="center" justifyContent="center">
        <ErrorOutline fontSize="large" className={classes.icon} />
        <Typography variant="h1">Page Not Found</Typography>
      </Box>
      <Box py={2}>
        <Typography>This page does not exist.</Typography>
      </Box>
      <Box paddingBottom={2}>
        <Typography>
          Please check the URL and try again, or go back to the homepage.
        </Typography>
      </Box>
      <Link to="/">
        <Button
          className={classes.button}
          size="small"
          variant="contained"
          color="primary">
          Back to homepage
        </Button>
      </Link>
    </Box>
  )
}

export default PageNotFound
