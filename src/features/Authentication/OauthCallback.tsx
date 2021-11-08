import React, { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

/**
 * Callback that transfers the user to the login system
 */
const OauthCallback = () => {
  const { provider } = useParams()
  const location = useLocation()

  useEffect(() => {
    window.opener?.postMessage(
      {
        query: location.search,
        provider: provider,
        url: `${window.location.origin}/${process.env.REACT_APP_BASENAME}${location.pathname}`,
      },
      window.location.toString(),
    )
    window.close()
  }, [location.pathname, location.search, provider])

  return (
    <Box textAlign="center">
      <Typography variant="h1">
        Transferring to login system ........
      </Typography>
    </Box>
  )
}

export default OauthCallback
