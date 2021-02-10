import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import BackToHomepageButton from "common/components/BackToHomepageButton"
import ErrorMessage from "./ErrorMessage"
import useStyles from "./errorStyles"

/**
 * ServerError is the UI display when there is a server error.
 */

const ServerError = () => {
  const classes = useStyles()

  return (
    <Box className={classes.error500}>
      <Typography variant="h2" gutterBottom align="center">
        We seem to be having server issues.
      </Typography>
      <ErrorMessage />
      <BackToHomepageButton />
    </Box>
  )
}

export default ServerError
