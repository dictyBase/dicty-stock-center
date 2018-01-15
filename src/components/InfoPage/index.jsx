import React, { Component } from 'react'
import InfoPageView from './InfoPageView'
import Skeleton from 'react-loading-skeleton'
import { Flex, Box } from 'rebass'

export default class InfoPage extends Component {
    displayName = 'toolbar with entity controls'
    componentDidMount() {
        const { match, pageActions } = this.props
        pageActions.fetchInfoPage(match.params.name)
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
                    match={ this.props.match }
                />
            )
        }
        return (
            <Flex justify="center">
                <Box w={ '80%' }>
                    <h1>{ this.props.title || <Skeleton /> }</h1>
                    <Skeleton count={ 10 } />
                    <br /><br />
                    <Skeleton count={ 10 } />
                    <br /><br />
                    <Skeleton count={ 10 } />
                </Box>
            </Flex>
        )
    }
}
