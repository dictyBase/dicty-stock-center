// @flow
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import { routerMiddleware } from "react-router-redux"
import manageStateStorage from "middlewares/storage"
import apiResponse from "middlewares/apiResponse"
import { dsctypes } from "constants/dsctypes"
import history from "utils/routerHistory"

const authArg = {
  save_action: dsctypes.LOGIN_SUCCESS,
  remove_action: dsctypes.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth"
}
const cartArg = {
  save_action: dsctypes.ADD_TO_CART,
  remove_action: dsctypes.REMOVE_FROM_CART,
  key: "cart",
  namespace: "shoppingCart"
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    manageStateStorage(authArg),
    manageStateStorage(cartArg),
    apiResponse
  )
)

export default function configureStore(initialState: Object) {
  const store = createStore(rootReducer, initialState, enhancer)
  if (process.env.NODE_ENV === "development") {
    if (module.hot) {
      module.hot.accept("../reducers", () =>
        store.replaceReducer(require("../reducers").default)
      )
    }
  }
  return store
}
