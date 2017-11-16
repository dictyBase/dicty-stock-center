import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import App from 'containers/App'
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
    render() {
        const { store, history } = this.props
        const logPageView = () => {
            ReactGA.set({ page: window.location.pathname })
            ReactGA.pageview(window.location.pathname)
            return null
        }
        return (
        <Provider store={ store }>
            <div>
                <ConnectedRouter history= { history } >
                <Route path="/" component={ logPageView } />
                  <Switch>
                      <Route exact path="/" component={ App } />
                  </Switch>
                </ConnectedRouter>
            </div>
        </Provider>
        )
    }
}

