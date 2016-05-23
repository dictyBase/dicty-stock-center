import React, { Component } from 'react'
import 'styles/core.scss'

export default class SubmitLoader extends Component {
    displayName = 'loading component';
    render() {
        return (
            <div className="container">
                <div className="col-md-offset-4 col-md-4 text-center">
                    <h1>Please wait...</h1>
                    <i className="fa fa-5x fa-spinner fa-pulse fa-fw margin-bottom"></i>
                </div>
            </div>
        )
    }
}
