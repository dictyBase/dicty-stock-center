import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container, AlertSuccess } from 'styles'
import FontAwesome from 'react-fontawesome'

export class AuthLoader extends Component {
    displayName = 'loading component during authentication'
    render() {
        return (
            <Container>
                <Flex justify="center">
                    <Box>
                        <h1>Logging in...</h1>
                    </Box>
                    <Box>
                        <FontAwesome name="spinner" size="5x" pulse fixedWidth />
                    </Box>
                </Flex>
            </Container>
        )
    }
}

export class Logout extends Component {
    displayName = 'logout confirmation'
    render() {
        return (
            <Container>
                <Flex>
                    <Box>
                        <AlertSuccess>
                            <FontAwesome name="check-circle-o" size="5x" />
                            <h1>Logout successful!</h1>
                            <p>
                                You have successfully logged out of Dicty Stock
                                Center
                            </p>
                        </AlertSuccess>
                    </Box>
                    <Box>
                        <Link to="/" className="btn btn-lg btn-primary">
                            Stock Center Home
                        </Link>
                    </Box>
                </Flex>
            </Container>
        )
    }
}
