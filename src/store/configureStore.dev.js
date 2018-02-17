import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import { routerMiddleware } from "react-router-redux"
import {
  tokenStorageMiddleware,
  userStorageMiddleware,
} from "middlewares/storage"
import { dsctypes } from "../constants"
import history from "utils/routerHistory"

const options = {
  save: dsctypes.LOGIN_SUCCESS,
  remove: dsctypes.LOGOUT_SUCCESS,
}
const enhancer = applyMiddleware(
  routerMiddleware(history),
  thunk,
  tokenStorageMiddleware(options),
  userStorageMiddleware(options),
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers").default),
    )
  }
  return store
}
