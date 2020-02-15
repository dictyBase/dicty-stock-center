import React, { Component } from "react"
import { Login as LoginContainer } from "dicty-components-login"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import oauthConfig from "utils/oauthConfig"
import ErrorNotification from "components/authentication/ErrorNotification"
import Grid from "@material-ui/core/Grid"

// list of buttons to display
const buttons = ["orcid", "google", "linkedin"]

/**
 * Component that displays all of the social login buttons with click handlers for each one
 */

class Login extends Component {
  handleClick = name => {
    const config = oauthConfig[name]
    let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
    url += `&scope=${config.scopes.join(config.scopeDelimiter)}`
    if (config.requiredUrlParams) {
      config.requiredUrlParams.forEach(element => {
        url += `&${element[0]}=${element[1]}`
      })
    }
    if (config.optionalUrlParams) {
      config.optionalUrlParams.forEach(element => {
        url += `&${element[0]}=${element[1]}`
      })
    }
    url += `&redirect_uri=${config.redirectUrl}`
    window.open(
      url,
      name,
      `width=${config.popupOptions.width},
                    height=${config.popupOptions.height}`,
    )
  }
  render() {
    const { state = {} } = this.props.location
    const { error } = state
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
          <center>
            <h1>Log in</h1>
          </center>
          {error && <ErrorNotification error={error} />}
          <Grid container justify="center">
            <Grid item xs={1} />
            <Grid item xs={4}>
              <LoginContainer buttons={buttons} onClick={this.handleClick} />
              <OauthSignHandler />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Login
