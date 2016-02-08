import { createStore, compose } from 'redux'
import { persistState } from 'redux-devtools'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
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
