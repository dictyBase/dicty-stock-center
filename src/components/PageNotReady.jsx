import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Jumbotron } from 'styles'

export default class PageNotReady extends Component {
    displayName = 'homepage component';
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1><i className="fa fa-wrench"></i> Under Construction</h1>
                    <p>This page is not ready yet.</p>
                    <Link to="/" className="btn btn-primary">Stock Center Home</Link>
                </Jumbotron>
            </Container>
        )
    }
}
