import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
	// todo -> create store with middleware
  return createStore(rootReducer, initialState)
}
