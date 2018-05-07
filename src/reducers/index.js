// @flow
import { combineReducers } from "redux"
import authReducer from "reducers/auth"
import { routerReducer } from "react-router-redux"
import { reducer as formReducer } from "redux-form"
import orderReducer, { formReducerPlugin } from "reducers/order"
import pageReducer from "reducers/page"
import stockCenterReducer from "reducers/stockCenter"
import cartReducer from "reducers/cart"

const rootReducer = combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer.plugin(formReducerPlugin),
  order: orderReducer,
  page: pageReducer,
  stockCenter: stockCenterReducer,
  cart: cartReducer
})

export default rootReducer

// Shape of the state can be found in the root directory's docs folder
