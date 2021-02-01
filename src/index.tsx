import "common/utils/polyfills"
import React from "react"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import "intersection-observer"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { AuthProvider } from "features/Authentication/AuthStore"
import AppProviders from "app/layout/AppProviders"
import App from "app/layout/App"
import "common/utils/icons" // fontawesome library
import "fontsource-roboto"

// AuthProvider needs to be outermost so ApolloProvider can access its token
ReactDOM.render(
  <AuthProvider>
    <AppProviders>
      <CssBaseline />
      <App />
    </AppProviders>
  </AuthProvider>,
  document.getElementById("root"),
)
