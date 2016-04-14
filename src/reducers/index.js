import { combineReducers } from 'redux'
import auth from 'reducers/auth'
import { routeReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import orderFormReducer from 'reducers/order-form'

const rootReducer = combineReducers({
    auth,
    routing: routeReducer,
    form: formReducer.plugin({
        orderForm: orderFormReducer
    })
})

export default rootReducer
