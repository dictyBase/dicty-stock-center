import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import DevTools from './DevTools'

export default class Root extends Component {
  displayName = 'dev root component';

  static propTypes = {
      store: PropTypes.object
  };

  render() {
      const { store } = this.props
      return (
        <Provider store={store}>
          <div>
            <App />
            <DevTools />
          </div>
        </Provider>
      )
  }
}
