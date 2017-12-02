import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Jumbotron } from 'styles'
import FontAwesome from 'react-fontawesome'

export default class PageNotReady extends Component {
    displayName = 'homepage component';
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1><FontAwesome name="wrench" /> Under Construction</h1>
                    <p>This page is not ready yet.</p>
                    <Link to="/" className="btn btn-primary">Stock Center Home</Link>
                </Jumbotron>
            </Container>
        )
    }
}
