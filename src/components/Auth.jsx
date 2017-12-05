import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { AlertSuccess } from 'styles'
import FontAwesome from 'react-fontawesome'

export class AuthLoader extends Component {
    displayName = 'loading component during authentication'
    render() {
        return (
            <Flex wrap justify="center">
                <Box>
                    <h1>Logging in...</h1>
                </Box>
                <Box>
                    <FontAwesome name="spinner" size="5x" pulse fixedWidth />
                </Box>
            </Flex>
        )
    }
}

export class Logout extends Component {
    displayName = 'logout confirmation'
    render() {
        return (
            <Flex wrap justify="center">
                <Box w={ 3 / 4 }>
                    <AlertSuccess>
                        <FontAwesome name="check-circle-o" size="5x" />
                        <h1>Logout successful!</h1>
                        <p>
                            You have successfully logged out of Dicty Stock
                            Center
                        </p>
                    </AlertSuccess>
                </Box>
                <Box w={ 3 / 4 }>
                    <Link to="/" className="btn btn-lg btn-primary">
                        Stock Center Home
                    </Link>
                </Box>
            </Flex>
        )
    }
}
