import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import authReducer from "reducers/auth"
import pageReducer from "reducers/page"
import cartReducer from "reducers/cart"
import footerReducer from "reducers/footer"
import navbarReducer from "reducers/navbar"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    page: pageReducer,
    cart: cartReducer,
    footer: footerReducer,
    navbar: navbarReducer,
  })

// Shape of the state can be found in the root directory's docs folder
