import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { AlertSuccess } from 'styles'
import { PrimaryButton } from 'styles/buttons'

const CenteredBox = styled(Box)`
    text-align: center;
`

export class AuthLoader extends Component {
    displayName = 'loading component during authentication'
    render() {
        return (
            <Flex wrap justify="center">
                <CenteredBox>
                    <h1>Logging in...</h1>
                    <br />
                    <FontAwesome name="spinner" size="5x" pulse fixedWidth />
                </CenteredBox>
            </Flex>
        )
    }
}

export class Logout extends Component {
    displayName = 'logout confirmation'
    render() {
        return (
            <Flex wrap justify="center">
                <CenteredBox w={ 3 / 4 }>
                    <AlertSuccess>
                        <FontAwesome name="check-circle-o" size="5x" />
                        <h1>Logout successful!</h1>
                        <p>
                            You have successfully logged out of Dicty Stock
                            Center
                        </p>
                        <PrimaryButton large>
                            <Link to="/">Stock Center Home</Link>
                        </PrimaryButton>
                    </AlertSuccess>
                </CenteredBox>
            </Flex>
        )
    }
}
