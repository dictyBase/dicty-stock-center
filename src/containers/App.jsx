import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { StyleRoot } from 'radium'
import Navbar from 'components/dicty-react-components/src/Navbar'
import NavItem from 'components/dicty-react-components/src/NavItem'
import RouterNavItem from 'components/dicty-react-components/src/RouterNavItem'
import NavbarHeader from 'components/dicty-react-components/src/NavbarHeader'
import NavbarItems from 'components/dicty-react-components/src/NavbarItems'
import NavbarDropdown from 'components/dicty-react-components/src/NavbarDropdown'
import DropdownMenu from 'components/dicty-react-components/src/DropdownMenu'
import Logout from 'components/Logout'
import { bindActionCreators } from 'redux'
import * as authActionCreators from 'actions/auth'

class App extends Component {
    displayName = 'the primary app component';
    static propTypes = {
        auth: PropTypes.object.isRequired
    };
    renderChildren = () => {
        const { children } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {...this.props})
        })
    };
    render() {
        return (
            <div>
                <StyleRoot>
                    <Navbar>
                        <NavbarHeader href="/" name="dictyBase"/>
                        <NavbarItems>
                            <NavItem link="#" title="Genomes" />
                            <NavItem link="#" title="Tools" />
                            <NavItem link="#" title="Explore" />
                            <NavbarDropdown name="Community">
                                <DropdownMenu menuItems={ [{href: '#', name: 'Home'}] }/>
                            </NavbarDropdown>
                            <RouterNavItem path="home" title="Stock Center">Login</RouterNavItem>
                            {
                                this.props.auth.isAuthenticated
                                ? <Logout {...this.props} />
                                : <Link to="login" className="btn btn-default navbar-btn">
                                    Login</Link>
                            }
                        </NavbarItems>
                    </Navbar>
                </StyleRoot>
            { this.renderChildren() }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { auth } = state
    return { auth: auth, routeProps: ownProps }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
