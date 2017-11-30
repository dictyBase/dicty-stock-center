import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

const CenteredBox = styled(Box)`
    text-align: center;
`

export default class Loader extends Component {
    displayName = 'loading component'
    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string
    }
    render() {
        const { title, message } = this.props
        return (
            <Flex wrap justify="center">
                <CenteredBox>
                    <h1>{ title && title }</h1>
                    <i className="fa fa-5x fa-spinner fa-pulse fa-fw margin-bottom" />
                    <h4>{ message && message }</h4>
                </CenteredBox>
            </Flex>
        )
    }
}
