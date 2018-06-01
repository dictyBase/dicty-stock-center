import React from "react"
import { ConnectedRouter } from "react-router-redux"
import { Provider } from "react-redux"
import { mount } from "enzyme"
import App from "components/App"
import configureStore from "store"
import history from "utils/routerHistory"

export default function renderAppWithState(state) {
  const store = configureStore(state)
  const wrapper = mount(
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </div>
    </Provider>,
  )
  return [store, wrapper]
}
