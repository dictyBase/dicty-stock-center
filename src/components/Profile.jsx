import React, { Component } from 'react'
import { Link } from 'react-router'
import 'styles/core.scss'

export default class Profile extends Component {
    displayName = 'user profile';
    render() {
        const { user } = this.props.auth
        return (
            <div className="container-fluid">
                <ol className="breadcrumb">
                  <li><Link to="/home">Home</Link></li>
                  <li className="active">My Profile</li>
                </ol>
                <h2 className="page-header">Your Profile</h2>
                <span>Name: { user.name } </span>
            </div>
        )
    }
}

