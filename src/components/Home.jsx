import React, { Component } from 'react'
import { Link } from 'react-router'
// import { routeActions } from 'react-router-redux'
import 'styles/core.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    renderUserInfo = () => {
        const { user } = this.props.auth
        if (user) {
            return (
                <div className="row">
                    <div className="col-sm-4">
                        Hello, { user.name }
                    </div>
                    <div className="col-sm-offset-4 col-sm-4 text-right">
                        <Link to="home/profile">My Profile</Link>
                    </div>
                </div>
            )
        }
        return null
    }
    render() {
        return (
            <div className="container">
                { this.renderUserInfo() }
                <h1>Welcome to Dicty Stock Center</h1>
            </div>
        )
    }
}
