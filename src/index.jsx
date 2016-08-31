import React from 'react'
import { render } from 'react-dom'
import Root from 'containers/Root'
import history from 'utils/routerHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import simpleStorage from 'simplestorage.js'
import configureStore from 'store'

// persist shopping cart to local storage
const initialState = {
    cart: simpleStorage.get('shoppingCart')
}

const store = configureStore(initialState)
store.subscribe(() => {
    simpleStorage.set('shoppingCart', store.getState().cart)
})

const browserHistory = syncHistoryWithStore(history, store)

// Render the React application to the DOM
render(
  <Root store={ store } history={ browserHistory }/>,
  document.getElementById('root')
)
