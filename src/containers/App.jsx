import React, { Component, PropTypes } from 'react'
import DictyNavbar from 'components/DictyNavbar'
import DictyHeader from 'components/DictyHeader'
import DictyFooter from 'components/DictyFooter'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium'
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
        const siteMap = [
            {
                name: 'Genomes',
                links: [
                    {name: 'Genomes Home', href: '#'}
                ]
            },
            {
                name: 'Tools',
                links: [
                    {name: 'Tools Home', href: '#'},
                    {name: 'New Genome Browser', href: '#'}
                ]
            },
            {
                name: 'Explore',
                links: [
                    {name: 'Explore Home', href: '#'},
                    {name: 'Dicty Art', href: '#'},
                    {name: 'Gallery', href: '#'},
                    {name: 'Genome Resources', href: '#'},
                    {name: 'Genome Statistics', href: '#'},
                    {name: 'Learn About Dicty', href: '#'},
                    {name: 'teaching Protocols', href: '#'},
                    {name: 'Useful Links', href: '#'}
                ]
            },
            {
                name: 'Research',
                links: [
                    {name: 'Research Home', href: '#'},
                    {name: 'Anatomy Ontology', href: '#'},
                    {name: 'Codon Bias Table', href: '#'},
                    {name: 'Nomenclature Guidelines', href: '#'},
                    {name: 'Phenotyping', href: '#'},
                    {name: 'Techniques', href: '#'}
                ]
            },
            {
                name: 'Dicty Stock Center',
                links: [
                    {name: 'Stock Center Home', href: '/'}
                ]
            },
            {
                name: 'Community',
                links: [
                    {name: 'Community Home', href: '#'},
                    {name: 'Cite Us', href: '#'},
                    {name: 'Dicty Annual Conferences', href: '#'},
                    {name: 'Dicty Email Forum', href: '#'},
                    {name: 'Dicty Labs', href: '#'},
                    {name: 'History', href: '#'},
                    {name: 'Jobs', href: '#'},
                    {name: 'Upcoming Meetings', href: '#'}
                ]
            }
        ]
        const logo = {
            path: 'https://betatest.dictybase.org/scripts/dictyHF/dictyLogo.png',
            href: 'http://dictybase.org/'
        }
        return (
            <StyleRoot>
                <div>
                    <DictyHeader
                      auth={ this.props.auth }
                      logo={ logo }
                      authActions={ this.props.authActions }
                    />
                    <DictyNavbar items={ siteMap } />
                    { this.renderChildren() }
                    <DictyFooter />
                </div>
            </StyleRoot>
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
