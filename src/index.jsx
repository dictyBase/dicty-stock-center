import React from 'react'
import { render } from 'react-dom'
import Root from 'containers/Root'
import configureStore from 'store'

const store = configureStore()

// Render the React application to the DOM
render(
  <Root store={ store } />,
  document.getElementById('root')
)
