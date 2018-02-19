// @flow
import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import App from "containers/App"

type Props = {
  store: Object,
  history: Object,
}

const setGoogleAnalytics = async (location, action) => {
  try {
    const module = await import("react-ga")
    let ReactGA = module.default
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  } catch (e) {
    console.error("could not load react-ga module ", JSON.stringify(e))
  }
}

let Root = ({ store, history }: Props) => {
  if (process.env.NODE_ENV === "production") {
    history.listen((location, action) => {
      setGoogleAnalytics(location, action)
    })
  }
  return (
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </div>
    </Provider>
  )
}

export default Root
