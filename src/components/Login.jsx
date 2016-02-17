import React, { Component, PropTypes } from 'react'
import OauthSignInButton from 'components/OauthSignInButton'
import clientConfig from 'utils/clientConfig'
import 'styles/core.scss'

const getDefaultProviders = () => {
    let providers = []
    for (name in clientConfig) {
        providers.push(name)
    }
    return providers
}

export default class Login extends Component {
    displayName = 'login display';
    static propTypes = {
        providers: PropTypes.array
    };
    static defaultProps = {
        providers: getDefaultProviders()
    };
    constructor(props) {
        super(props)
    }
    renderOauthButtons = () => {
        const { providers } = this.props
        return providers.map((provider, index) => {
            return (
                <OauthSignInButton provider={ provider } key={ index } {...this.props}/>
            )
        })
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4"></div>
                <div className="col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title"> LogIn </h2>
                        </div>
                        <div className="panel-body">
                            { this.renderOauthButtons() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


