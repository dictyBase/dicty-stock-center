import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import BackToHomepageButton from "common/components/BackToHomepageButton"
import ErrorMessage from "./ErrorMessage"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 5,
    minHeight: "300px",
  },
  header: {
    color: theme.palette.error.main,
  },
}))

/**
 * ServerError is the UI display when there is a server error.
 */

const ServerError = () => {
  const classes = useStyles()

  return (
    <Box mt={15} textAlign="center" className={classes.container}>
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        className={classes.header}>
        We seem to be having server issues.
      </Typography>
      <ErrorMessage />
      <BackToHomepageButton />
    </Box>
  )
}

export default ServerError
