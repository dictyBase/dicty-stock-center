import React from 'react'
import { render } from 'react-dom'
import Root from 'containers/Root'
import history from 'utils/routerHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store'

const store = configureStore()
const browserHistory = syncHistoryWithStore(history, store)

// Render the React application to the DOM
render(
  <Root store={ store } history={ browserHistory }/>,
  document.getElementById('root')
)
