import "common/utils/polyfills" // necessary for IE11
import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { AuthProvider } from "features/Authentication/AuthStore"
import history from "common/utils/routerHistory"
import AppProviders from "app/layout/AppProviders"
import App from "app/layout/App"
import "common/utils/icons" // fontawesome library
import "fontsource-roboto"

const setGoogleAnalytics = async (location: any) => {
  try {
    const module = await import("react-ga")
    const page = location.pathname || window.location.pathname
    let ReactGA = module.default
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    ReactGA.set({ page: page, anonymizeIp: true })
    ReactGA.pageview(page)
  } catch (e) {
    console.error("could not load react-ga module", JSON.stringify(e))
  }
}

if (process.env.NODE_ENV === "production") {
  history.listen((location: any) => {
    setGoogleAnalytics(location)
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
