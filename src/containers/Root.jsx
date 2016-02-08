import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'
import DevTools from 'containers/DevTools'

export default class Root extends Component {
    displayName = 'root component';
    static propTypes = {
        store: PropTypes.object.isRequired
    };
    render() {
        const { store } = this.props
        return (
          <Provider store={store}>
              <App />
              <DevTools />
          </Provider>
        )
    }
}

