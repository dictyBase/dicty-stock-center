import React, { Component } from 'react'
import { Container } from 'styles'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const CenteredBox = styled(Box)`
    text-align: center;
`

export default class SubmitLoader extends Component {
    displayName = 'loading component'
    render() {
        return (
            <Container>
                <Flex wrap justify="center">
                    <CenteredBox>
                        <h1>Please wait...</h1>
                        <FontAwesome name="spinner" size="5x" pulse mw />
                    </CenteredBox>
                </Flex>
            </Container>
        )
    }
}
