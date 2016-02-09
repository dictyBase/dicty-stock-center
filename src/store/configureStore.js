import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
)

export default function configureStore(initialState) {
  // todo -> create store with middleware

    const store = createStore(rootReducer, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('../reducers', () =>
          store.replaceReducer(require('../reducers').default)
        )
    }
    return store
}
