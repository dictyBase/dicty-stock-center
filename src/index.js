import React from "react"
import { render } from "react-dom"
import Root from "containers/Root"
import history from "utils/routerHistory"
import simpleStorage from "simplestorage.js"
import configureStore from "store"
import { hydrateAll, hydrateStore } from "utils/hydrateStore"

// load state from localStorage(if any) to set the
// initial state for the store
const initialState = hydrateAll(
  hydrateStore({ key: "auth", namespace: "auth" }),
  hydrateStore({ key: "cart", namespace: "shoppingCart" }),
)

const store = configureStore(initialState)

store.subscribe(() => {
  simpleStorage.set("shoppingCart", store.getState().cart)
})

// Render the React application to the DOM
render(
  <Root store={store} history={history} />,
  document.getElementById("root"),
)
