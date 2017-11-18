import React, { Component } from 'react'
import InfoPageView from './InfoPageView'
import Loader from '../Loader'

export default class InfoPage extends Component {
    displayName = 'toolbar with entity controls'
    componentDidMount() {
        const { match, pageActions } = this.props
        console.log(match)
        pageActions.fetchInfoPage(match.params.name)
        
        // alternate option
        // const { routeProps, pageActions, location: { pathname } } = this.props
        // const [name, post] = pathname.split('/').slice(1,3)
        // console.log(name)
        // pageActions.fetchInfoPage(name)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.page.page !== nextProps.page.page) {
            const { match, pageActions } = nextProps
            pageActions.fetchInfoPage(match.params.name)
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
        console.log(this.props.page)
        // console.log(this.props.match.params.name)
        // console.log(this.props.location.pathname)
        return <Loader title="Page loading..." />
    }
}
