import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import { syncHistory } from 'react-router-redux'
import { BrowserHistory } from 'react-router'

const middleware = syncHistory(BrowserHistory)
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
    middleware.listenForReplays(store)
    return store
}
