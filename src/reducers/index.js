import { combineReducers } from 'redux'
import auth from 'reducers/auth'
import { routeReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import orderReducer from 'reducers/order'

const rootReducer = combineReducers({
    auth,
    routing: routeReducer,
    form: formReducer,
    order: orderReducer
})

export default rootReducer
