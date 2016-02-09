import React, { Component } from 'react'
import 'styles/login.scss'

export default class Login extends Component {
    displayName = 'third party login component';
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <a className="btn btn-block btn-social btn-github">
                        <i className="fa fa-github"></i> Sign in with GitHub
                    </a>
                    <a className="btn btn-block btn-social btn-google">
                        <i className="fa fa-google"></i> Sign in with Google
                    </a>
                    <a className="btn btn-block btn-social btn-facebook">
                        <i className="fa fa-facebook"></i> Sign in with Facebook
                    </a>
                    <a className="btn btn-block btn-social btn-linkedin">
                        <i className="fa fa-linkedin"></i> Sign in with Linkedin
                    </a>
                    <a className="btn btn-block btn-social btn-twitter">
                        <i className="fa fa-twitter"></i> Sign in with Twitter
                    </a>
                </div>
            </div>
        )
    }
}


