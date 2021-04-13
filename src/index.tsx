import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import "intersection-observer"
import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { AuthProvider } from "features/Authentication/AuthStore"
import AppProviders from "app/layout/AppProviders"
import App from "app/layout/App"
import "common/utils/icons" // fontawesome library
import "fontsource-roboto"

// need to reconfigure homepage path in order to initiate mock service
// worker used for testing purposes
// https://mswjs.io/docs/getting-started/integrate/browser
async function main() {
  if (process.env.REACT_APP_API_MOCKING === true) {
    if (window.location.pathname === "/stockcenter") {
      window.location.pathname = "/stockcenter/"
      return
    }

    const { worker } = require("./mocks/browser")
    await worker.start({
      serviceWorker: {
        url: "/stockcenter/mockServiceWorker.js",
      },
    })
  }

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
}

main()
