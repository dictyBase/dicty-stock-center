import React from 'react'
import { render } from 'react-dom'
import Root from 'containers/Root'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

// Render the React application to the DOM
render(
  <Root store={ store } history={ history }/>,
  document.getElementById('root')
)
