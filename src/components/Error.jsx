import React, { Component } from 'react'
import { Container, AlertBox } from 'styles'
import FontAwesome from 'react-fontawesome'

export default class Error extends Component {
    displayName = 'homepage component';
    render() {
        const { auth, order } = this.props
        const orderError = order.error
        const authError = auth.error
        return (
            <Container>
                <AlertBox>
                    <h1><FontAwesome name="exclamation-triangle" /> Error</h1>
                    <h2>{ authError && authError }</h2>
                    <h2>{ orderError && orderError }</h2>
                </AlertBox>
            </Container>
        )
    }
}
