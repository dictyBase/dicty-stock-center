import React, { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import Grid from "@material-ui/core/Grid"

// helper function to set redirect URL with basename if included
const redirectUrlGenerator = (basename: string) => {
  let url
  if (basename === "" || basename === "/") {
    url = `${window.location.origin}`
  } else if (basename.charAt(0) === "/") {
    url = `${window.location.origin}${basename}`
  } else {
    url = `${window.location.origin}/${basename}`
  }
  return url
}

type Props = {
  location: {
    search: string
    pathname: string
  }
  match: {
    params: {
      provider: string
    }
  }
}

/**
 * Callback that transfers the user to the login system
 */

const OauthCallback = () => {
  const { provider } = useParams()
  const location = useLocation()

  useEffect(() => {
    window.opener.postMessage(
      {
        query: location.search,
        provider: provider,
        url: `${redirectUrlGenerator(process.env.REACT_APP_BASENAME)}${
          location.pathname
        }`,
      },
      window.location,
    )
    window.close()
  }, [location.pathname, location.search, provider])

  return (
    <Grid container justify="center">
      <Grid item>
        <h1>Transferring to login system ........</h1>
      </Grid>
    </Grid>
  )
}

export default OauthCallback
