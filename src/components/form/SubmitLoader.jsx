import React, { Component } from 'react'
import { Container } from 'styles'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

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
                        <i className="fa fa-5x fa-spinner fa-pulse fa-fw margin-bottom" />
                    </CenteredBox>
                </Flex>
            </Container>
        )
    }
}
