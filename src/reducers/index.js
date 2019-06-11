// @flow
import { combineReducers } from "redux"
import authReducer from "reducers/auth"
import pageReducer from "reducers/page"
import cartReducer from "reducers/cart"
import footerReducer from "reducers/footer"
import navbarReducer from "reducers/navbar"

const rootReducer = combineReducers({
  auth: authReducer,
  page: pageReducer,
  cart: cartReducer,
  footer: footerReducer,
  navbar: navbarReducer,
})

export default rootReducer

// Shape of the state can be found in the root directory's docs folder
