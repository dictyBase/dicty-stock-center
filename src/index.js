import "utils/polyfills" // necessary for IE11
import React from "react"
import { render } from "react-dom"
import history from "utils/routerHistory"
import configureStore from "store"
import { hydrateAll, hydrateStore } from "dicty-components-redux"
import App from "components/App"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

// load state from localStorage(if any) to set the
// initial state for the store
const initialState = hydrateAll(
  hydrateStore({ key: "auth", namespace: "auth" }),
  hydrateStore({ key: "cart", namespace: "shoppingCart" })
)
const store = configureStore(initialState)

const setGoogleAnalytics = async (location, action) => {
  try {
    const module = await import("react-ga")
    let ReactGA = module.default
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
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </div>
    </Provider>,
    document.getElementById("root")
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
