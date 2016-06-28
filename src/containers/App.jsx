import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium'
import Navbar from 'dicty-react-components/src/Navbar'
import NavItem from 'dicty-react-components/src/NavItem'
import NavbarHeader from 'dicty-react-components/src/NavbarHeader'
import NavbarItems from 'dicty-react-components/src/NavbarItems'
import NavbarDropdown from 'dicty-react-components/src/NavbarDropdown'
import DropdownMenu from 'dicty-react-components/src/DropdownMenu'
import Header from 'dicty-react-components/src/Header'
import HeaderLogo from 'dicty-react-components/src/HeaderLogo'
import HeaderItems from 'dicty-react-components/src/HeaderItems'
import HeaderLinks from 'dicty-react-components/src/HeaderLinks'
import SearchBox from 'dicty-react-components/src/SearchBox'
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
        const navStyle = {
            backgroundColor: '#1F4484',
            border: '1px solid #1F4484',
            marginTop: '10px'
        }
        const itemStyle = {
            color: '#ffffff',
            fontSize: '18px',
            ':hover': {
                color: '#ffffff',
                backgroundColor: '#1b3c74'
            },
            ':focus': {
                color: '#ffffff',
                backgroundColor: '#1b3c74'
            }
        }
        const menuItemStyle = {
            ':hover': {
                color: '#ffffff',
                backgroundColor: '#1F4484'
            },
            ':focus': {
                color: '#ffffff',
                backgroundColor: '#1F4484'
            },
            '@media (max-width: 767px)': {
                color: '#ffffff',

                ':hover': {
                    color: '#2574A9'
                }
            }
        }
        const genomes = [
            {href: '#', name: 'Home'}
        ]
        const tools = [
            {href: '#', name: 'New Genome Browser'}
        ]
        const explore = [
            {href: '#', name: 'Dicty Art'},
            {href: '#', name: 'Gallery'}
        ]
        const research = [
            {href: '#', name: 'Anatomy Ontology'},
            {href: '#', name: 'Codon Bias table'}
        ]
        const community = [
            {href: '#', name: 'Cite Us'},
            {href: '#', name: 'Dicty Annual Conferences'}
        ]
        const headerLinks = [
            {href: '#', name: 'Cite Us', iconClass: 'fa fa-book'},
            {href: '#', name: 'Downloads', iconClass: 'fa fa-download'},
            {href: '#', name: 'About Us', iconClass: 'fa fa-info-circle'}
        ]
        return (
            <div>
                <StyleRoot>
                    <Header>
                        <HeaderLogo path= "dicty-logo.png"
                            href= "http://dictybase.org/"
                        />
                        <HeaderItems>
                            <HeaderLinks links= { headerLinks } />
                            <SearchBox />
                        </HeaderItems>
                    </Header>
                    <Navbar navStyle={ navStyle }>
                        <NavbarHeader href="/" name="dictyBase"/>
                        <NavbarItems>
                            <NavbarDropdown name="Genomes" itemStyle={ itemStyle }>
                                <DropdownMenu menuItems={ genomes }
                                    menuItemStyle={ menuItemStyle }
                                />
                            </NavbarDropdown>
                            <NavbarDropdown name="Tools" itemStyle={ itemStyle }>
                                <DropdownMenu menuItems={ tools }
                                    menuItemStyle={ menuItemStyle }
                                />
                            </NavbarDropdown>
                            <NavbarDropdown name="Explore" itemStyle={ itemStyle }>
                                <DropdownMenu menuItems={ explore }
                                    menuItemStyle={ menuItemStyle }
                                />
                            </NavbarDropdown>
                            <NavbarDropdown name="Research" itemStyle={ itemStyle }>
                                <DropdownMenu menuItems={ research }
                                    menuItemStyle={ menuItemStyle }
                                />
                            </NavbarDropdown>
                            <NavItem link="/" title="Dicty Stock Center" itemStyle={ itemStyle }/>
                            <NavbarDropdown name="Community" itemStyle={ itemStyle }>
                                <DropdownMenu menuItems={ community }
                                    menuItemStyle={ menuItemStyle }
                                />
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
