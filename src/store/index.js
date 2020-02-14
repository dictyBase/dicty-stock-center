// @flow
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { routerMiddleware } from "connected-react-router"
import history from "utils/routerHistory"
import createRootReducer from "../reducers"

const enhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), thunk),
)

export default function configureStore(initialState: Object) {
  const store = createStore<*, *, *>(
    createRootReducer(history),
    initialState,
    enhancer,
  )
  if (process.env.NODE_ENV === "development") {
    if (module.hot) {
      module.hot.accept("../reducers", () =>
        store.replaceReducer(createRootReducer(history)),
      )
    }
  }
  return store
}
