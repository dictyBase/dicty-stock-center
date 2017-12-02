import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

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
                    <FontAwesome name="spinner" pulse size="5x" fw />
                    <h4>{ message && message }</h4>
                </CenteredBox>
            </Flex>
        )
    }
}
