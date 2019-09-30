// @flow
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { routerMiddleware } from "connected-react-router"
import { manageStateStorage } from "dicty-components-redux"
import callAPI from "middlewares/callAPI"
import { dsctypes } from "constants/dsctypes"
import history from "utils/routerHistory"
import createRootReducer from "../reducers"

const authArg = {
  save_action: dsctypes.LOGIN_SUCCESS,
  remove_action: dsctypes.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth",
}
const roleArg = {
  save_action: dsctypes.FETCH_ROLE_SUCCESS,
  remove_action: dsctypes.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth",
}
const permArg = {
  save_action: dsctypes.FETCH_PERMISSION_SUCCESS,
  remove_action: dsctypes.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth",
}
const cartArg = {
  save_action: dsctypes.ADD_TO_CART,
  remove_action: dsctypes.REMOVE_FROM_CART,
  key: "cart",
  namespace: "shoppingCart",
}

const enhancer = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    callAPI,
    manageStateStorage(authArg),
    manageStateStorage(roleArg),
    manageStateStorage(permArg),
    manageStateStorage(cartArg),
  ),
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
