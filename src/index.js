import "utils/polyfills" // necessary for IE11
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { persistCache } from "apollo-cache-persist"
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

// Use an InMemoryCache, but keep it synced to localStorage
const cache = new InMemoryCache()
const storage = window.localStorage
const waitOnCache = persistCache({ cache, storage })

export const client = new ApolloClient({
  link,
  cache,
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

// Wait for the cache to sync before starting the app
waitOnCache.then(() => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <CssBaseline />
            <App />
          </>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>,
    document.getElementById("root"),
  )
})
