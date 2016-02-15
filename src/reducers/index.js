import { combineReducers } from 'redux'
import auth from 'reducers/auth'
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    auth,
    routing: routeReducer
})

export default rootReducer
