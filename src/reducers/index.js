import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import authReducer from "reducers/auth"
import pageReducer from "reducers/page"
import footerReducer from "reducers/footer"
import navbarReducer from "reducers/navbar"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    page: pageReducer,
    footer: footerReducer,
    navbar: navbarReducer,
  })

// Shape of the state can be found in the root directory's documentation folder
