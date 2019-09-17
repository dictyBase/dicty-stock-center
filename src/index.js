import "utils/polyfills" // necessary for IE11
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { createPersistedQueryLink } from "apollo-link-persisted-queries"
import CssBaseline from "@material-ui/core/CssBaseline"
import { hydrateAll, hydrateStore } from "dicty-components-redux"
import configureStore from "store"
import history from "utils/routerHistory"
import App from "components/App"
import "typeface-roboto"

// load state from localStorage(if any) to set the
// initial state for the store
const initialState = hydrateAll(
  hydrateStore({ key: "auth", namespace: "auth" }),
  hydrateStore({ key: "cart", namespace: "shoppingCart" }),
)
const store = configureStore(initialState)

// set up automatic persisted queries
// https://www.apollographql.com/docs/apollo-server/performance/apq/
const link = createPersistedQueryLink().concat(
  createHttpLink({ uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql` }),
)

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

const setGoogleAnalytics = async (location, action) => {
  try {
    const module = await import("react-ga")
    let ReactGA = module.default
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    ReactGA.set({ page: window.location.pathname, anonymizeIp: true })
    ReactGA.pageview(window.location.pathname)
  } catch (e) {
    console.error("could not load react-ga module", JSON.stringify(e))
  }
}

if (process.env.NODE_ENV === "production") {
  history.listen((location, action) => {
    setGoogleAnalytics(location, action)
  })
}

const renderApp = Component => {
  // Render the React application to the DOM
  render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <CssBaseline />
            <Component />
          </>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>,
    document.getElementById("root"),
  )
}

// First render
renderApp(App)

// Webpack HMR
if (module.hot) {
  module.hot.accept("components/App", () => {
    renderApp(App)
  })
}
