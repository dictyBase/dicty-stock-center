import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from 'routes'
import ReactGA from 'react-ga'

// initialize google analytics
let trackingId = __GA_TRACKING_ID__
ReactGA.initialize(trackingId)

export default class Root extends Component {
    displayName = 'root component';
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    logPageView = () => {
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
    }
    render() {
        const { store, history } = this.props
        return (
          <Provider store={ store }>
              <div>
                  <Router routes={ routes } history= { history } onUpdate={ this.logPageView }/>
              </div>
          </Provider>
        )
    }
}

