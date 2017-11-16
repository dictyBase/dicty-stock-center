import React, { Component } from 'react'
import InfoPageView from './InfoPageView'
import Loader from '../Loader'

export default class InfoPage extends Component {
    displayName = 'toolbar with entity controls'
    componentDidMount() {
        const { routeProps, pageActions } = this.props
        pageActions.fetchInfoPage(routeProps.match.params.name)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.page.page !== nextProps.page.page) {
            const { routeProps, pageActions } = nextProps
            pageActions.fetchInfoPage(routeProps.match.params.name)
        }
    }
    render() {
        const { isFetching, content } = this.props.page
        if (!isFetching && content) {
            return (
              <InfoPageView
                page={ this.props.page }
                pageActions={ this.props.pageActions }
                routeProps={ this.props.routeProps }
              />
            )
        }
        return <Loader title="Page loading..." />
    }
}
