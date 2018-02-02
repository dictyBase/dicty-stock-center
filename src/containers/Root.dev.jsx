// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import DevTools from 'containers/DevTools'
import App from 'containers/App'

type Props = {
    store: Object,
    history: Object
}

export default class Root extends Component<Props> {
    displayName = 'root component';

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

