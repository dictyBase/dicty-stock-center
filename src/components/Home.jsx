import React, { Component } from 'react'
import { Link } from 'react-router'
import { routeActions } from 'react-router-redux'
import 'styles/core.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    render() {
        const { user } = this.props.auth
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <h3 className="text-center">Hello, { user.name }</h3>
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            <h3>Welcome to the Dicty Stock Center</h3>
                            <hr />
                            <div className="col-sm-7">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3>Announcement</h3>
                                    </div>
                                    <div className="panel-body">
                                        <p>The National Institute of Health mandates that starting
                                        on Monday, August 10th, 2015, the DSC collects the following
                                        fees for their services from customers working at
                                        <u> non-profit organizations:</u>
                                        </p>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="panel panel-default text-center">
                                                    <div className="panel-heading">
                                                        <h3>Strain</h3>
                                                    </div>
                                                    <div className="panel-body">
                                                        <h1>$30</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="panel panel-default text-center">
                                                    <div className="panel-heading">
                                                        <h3>Plasmid</h3>
                                                    </div>
                                                    <div className="panel-body">
                                                        <h1>$15</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="panel panel-default text-center">
                                                    <div className="panel-heading">
                                                        <h3>Other Material</h3>
                                                    </div>
                                                    <div className="panel-body">
                                                        <h1>$40</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <Link to="home/profile">
                                    <i className="fa fa-user fa-2x"></i> My Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
