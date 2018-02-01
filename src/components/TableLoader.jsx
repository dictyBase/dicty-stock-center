// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'

const CenteredBox = styled(Box)`
    text-align: center;
`

type Props = {
    title: string,
    message: string
}

export default class TableLoader extends Component<Props> {
    displayName = 'table loader'

    render() {
        const title = this.props.title
        const message = this.props.message
        return (
            <div style={ { width: '100%' } }>
                <Flex justify="space-between">
                    <CenteredBox>
                        <h1>{ title && title }</h1>
                        <FontAwesome name="spinner" size="2x" pulse fixedWidth />
                        { message && message }
                    </CenteredBox>
                </Flex>
            </div>
        )
    }
}
