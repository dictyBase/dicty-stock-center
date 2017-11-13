import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from 'containers/DevTools'
import { Router, Route } from 'react-router-dom'
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
                  <Router history= { history }>
                    <Route exact path="/" component={ App } />
                  </Router>
                  <DevTools />
              </div>
          </Provider>
        )
    }
}

