import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from 'containers/DevTools'
import { ConnectedRouter } from 'react-router-redux'
import App from 'containers/App'

export default class Root extends Component {
    displayName = 'root component';
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    render() {
        const { store, history } = this.props
        return (
          <Provider store={ store }>
              <div>
                  <ConnectedRouter history= { history }>
                    <App />
                  </ConnectedRouter>
                  <DevTools />
              </div>
          </Provider>
        )
    }
}

