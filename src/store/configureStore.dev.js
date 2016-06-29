import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const middleware = routerMiddleware(browserHistory)
const enhancer = compose(
    applyMiddleware(middleware, thunk),
    DevTools.instrument(),
)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        )
    }
    return store
}
