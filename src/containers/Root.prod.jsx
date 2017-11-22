import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
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
        history.listen((location, action) => {
            ReactGA.set({ page: window.location.pathname })
            ReactGA.pageview(window.location.pathname)
        })
        return (
        <Provider store={ store }>
            <div>
                <ConnectedRouter history= { history } >
                    <App />
                </ConnectedRouter>
            </div>
        </Provider>
        )
    }
}

