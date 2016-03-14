import { combineReducers } from 'redux'
import auth from 'reducers/auth'
import { routeReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    auth,
    routing: routeReducer,
    form: formReducer
})

export default rootReducer
