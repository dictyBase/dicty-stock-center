// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from 'containers/App'
import ReactGA from 'react-ga'

type Props = {
    store: Object,
    history: Object
}

// initialize google analytics
let trackingId = __GA_TRACKING_ID__
ReactGA.initialize(trackingId)

export default class Root extends Component<Props> {
    displayName = 'root component';

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

