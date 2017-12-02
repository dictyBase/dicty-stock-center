// @flow
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'

const CenteredBox = styled(Box)`
    text-align: center;
`

// type Props = {
//     title: string,
//     message: string
// }

export default class TableLoader extends Component {
    displayName = 'table loader'
    // static propTypes = {
    //     title: PropTypes.string,
    //     message: PropTypes.string
    // }
    render() {
        const title: string = this.props.title
        const message: string = this.props.message
        return (
            <div style={ { width: '100%' } }>
                <Flex justify="space-between">
                    <CenteredBox>
                        <h1>{ title && title }</h1>
                        <FontAwesome name="spinner" size="2x" pulse fw />
                        { message && message }
                    </CenteredBox>
                </Flex>
            </div>
        )
    }
}
