import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium'
import Navbar from 'dicty-react-components/src/Navbar'
import NavItem from 'dicty-react-components/src/NavItem'
import NavbarHeader from 'dicty-react-components/src/NavbarHeader'
import NavbarItems from 'dicty-react-components/src/NavbarItems'
import NavbarDropdown from 'dicty-react-components/src/NavbarDropdown'
import DropdownMenu from 'dicty-react-components/src/DropdownMenu'
import { bindActionCreators } from 'redux'
import * as authActionCreators from 'actions/auth'
import * as shippingActionCreators from 'actions/order/shipping'
import * as paymentActionCreators from 'actions/order/payment'
import * as submitActionCreators from 'actions/order/submit'
import * as pageActionCreators from 'actions/page'
import { routerActions } from 'react-router-redux'

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
                            <NavItem link="#" title="Research" />
                            <NavItem link="#" title="Dicty Stock Center" />
                            <NavbarDropdown name="Community">
                                <DropdownMenu menuItems={ [{href: '#', name: 'Home'}] }/>
                            </NavbarDropdown>
                        </NavbarItems>
                    </Navbar>
                </StyleRoot>
            { this.renderChildren() }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { auth, order, page } = state
    return {
        auth: auth,
        routeProps: ownProps,
        order: order,
        page: page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch),
        orderActions: bindActionCreators(
            Object.assign({}, shippingActionCreators, paymentActionCreators, submitActionCreators),
            dispatch
        ),
        pageActions: bindActionCreators(pageActionCreators, dispatch),
        routerActions: bindActionCreators(routerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
