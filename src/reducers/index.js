import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import footerReducer from "reducers/footer"
import navbarReducer from "reducers/navbar"

export default history =>
  combineReducers({
    router: connectRouter(history),
    footer: footerReducer,
    navbar: navbarReducer,
  })

// Shape of the state can be found in the root directory's documentation folder
