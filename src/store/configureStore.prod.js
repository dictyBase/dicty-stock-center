import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { syncHistory } from 'react-router-redux'
import history from 'utils/routerHistory'

const middleware = syncHistory(history)
const enhancer = applyMiddleware(middleware, thunk)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)
    middleware.listenForReplays(store)
    return store
}
