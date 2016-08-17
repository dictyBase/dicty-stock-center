import { combineReducers } from 'redux'
import auth from 'reducers/auth'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import orderReducer, { formReducerPlugin } from 'reducers/order'
import pageReducer from 'reducers/page'
import stockCenter from 'reducers/stockCenter'

const rootReducer = combineReducers({
    auth,
    routing: routerReducer,
    form: formReducer.plugin(formReducerPlugin),
    order: orderReducer,
    page: pageReducer,
    stockCenter: stockCenter
})

export default rootReducer

/*
Shape of the state

{
    auth: {
        isFetching: false,
        isAuthenticated: false
    },
    routing: {...},
    form: {
        shipping: {
            asyncValidating: false,
            error: undefined,
            initialized: false,
            submitting: false,
            submitFailed: false,
            firstName: {
                visited: true,
                value: "John",
                touched: true
            },
            lastName: {..},
            email: {..}
            ...other form fields
        }
    },
    order: {
        initialized: true
        consumer: {
            firstName: '',
            lastName: '',
            email: ''
            ... other "shipping" form submitted values
        }
        shipping: {
            account: 'FedEx',
            accountNum: '748379',
            comments: ''
        }
    },
    stockCenter: {
        availability: [
            {name: 'Strains', amount: 1927},
            {name: 'Plasmids', amount: 882}
        ]
    }
}
*/
