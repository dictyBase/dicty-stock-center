import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from 'containers/DevTools'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'

export default class Root extends Component {
    displayName = 'root component';
    static propTypes = {
        store: PropTypes.object
    };
    render() {
        const { store } = this.props
        return (
          <Provider store={ store }>
              <div>
                  <Router routes={ routes } history= { browserHistory }/>
                  <DevTools />
              </div>
          </Provider>
        )
    }
}

