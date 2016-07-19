import React, { Component, PropTypes } from 'react'
import OauthSignInButton from 'components/OauthSignInButton'
import clientConfig from 'utils/clientConfig'
import 'styles/core.scss'

const getDefaultProviders = () => {
    let providers = []
    for (let name in clientConfig) {
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
            <div className="container">
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body text-center">
                                <h1>Log in</h1>
                                { this.renderOauthButtons() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


