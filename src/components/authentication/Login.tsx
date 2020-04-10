import React from "react"
import { Login as LoginContainer } from "dicty-components-login"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import oauthConfig from "utils/oauthConfig"
import Grid from "@material-ui/core/Grid"
import ErrorNotification from "./ErrorNotification"
import { useAuthStore } from "./AuthStore"

type Config = {
  name: string
  url: string
  authorizationEndpoint: string
  clientId: string
  redirectUrl: string
  requiredUrlParams?: Array<Array<string>>
  scopes: Array<string>
  scopeDelimiter: string
  optionalUrlParams?: Array<Array<string>>
}

/** The returned GraphQL error object */
type GraphQLError = {
  message?: string
  networkError?: object
  graphQLErrors?: Array<{
    message: string
    path: Array<string>
    extensions?: {
      code: string
      timestamp: string
    }
  }>
}

// list of buttons to display
const buttons = ["orcid", "google", "linkedin"]

const createOauthURL = (config: Config) => {
  let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
  url += `&scope=${config.scopes.join(config.scopeDelimiter)}`
  if (config.requiredUrlParams) {
    url += formatURLParams(config.requiredUrlParams)
  }
  if (config.optionalUrlParams) {
    url += formatURLParams(config.optionalUrlParams)
  }
  url += `&redirect_uri=${config.redirectUrl}`
  return url
}

const formatURLParams = (params: Array<Array<string>>) => {
  let url = ""
  params.forEach((element) => {
    url += `&${element[0]}=${element[1]}`
  })
  return url
}

const openOauthWindow = (name: string) => {
  const config = oauthConfig[name]
  const url = createOauthURL(config)
  window.open(
    url,
    name,
    `width=${config.popupOptions.width},
                    height=${config.popupOptions.height}`,
  )
}

const generateErrorDisplayMessage = (error: GraphQLError) => {
  let message = "Could not log in. Please contact us if the problem persists."
  if (error.networkError) {
    message = "Network Error"
  }
  if (
    error.graphQLErrors &&
    error.graphQLErrors.length > 0 &&
    error.graphQLErrors[0].extensions &&
    error.graphQLErrors[0].extensions.code === "NotFound"
  ) {
    message = `Could not find user account. 
      
      Please make sure you are a verified member and try again.`
  }
  return message
}

/**
 * Component that displays all of the social login buttons with click handlers for each one
 */

const Login = () => {
  const [{ error }] = useAuthStore()
  let message = ""

  if (error) {
    message = generateErrorDisplayMessage(error)
  }

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <div style={{ textAlign: "center" }}>
          <h1>Log in</h1>
        </div>
        <Grid container justify="center">
          <Grid item xs={1} />
          <Grid item xs={4}>
            {error && <ErrorNotification error={message} />}
            <LoginContainer buttons={buttons} onClick={openOauthWindow} />
            <OauthSignHandler />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export { createOauthURL, openOauthWindow, generateErrorDisplayMessage } // for testing purposes
export default Login
