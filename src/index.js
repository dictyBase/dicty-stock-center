import "utils/polyfills" // necessary for IE11
import React from "react"
import { render } from "react-dom"
import history from "utils/routerHistory"
import configureStore from "store"
import { hydrateAll, hydrateStore } from "dicty-components-redux"
import App from "components/App"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import "typeface-roboto"

// load state from localStorage(if any) to set the
// initial state for the store
const initialState = hydrateAll(
  hydrateStore({ key: "auth", namespace: "auth" }),
  hydrateStore({ key: "cart", namespace: "shoppingCart" }),
)
const store = configureStore(initialState)

export const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
})

const setGoogleAnalytics = async (location, action) => {
  try {
    const module = await import("react-ga")
    let ReactGA = module.default
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    ReactGA.set({ page: window.location.pathname })
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
        <div>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </div>
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
