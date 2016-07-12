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
        // const items = [
        //     {
        //         name: 'Genomes',
        //         href: '#',
        //         links: [
        //             {name: 'Home', href: '#'},
        //             {name: 'Home', href: '#'}
        //         ]
        //     },
        //     {
        //         name: 'Tools',
        //         href: '#',
        //         links: [
        //             {name: 'Home', href: '#'},
        //             {name: 'Home', href: '#'}
        //         ]
        //     }
        // ]
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
        const logo = {
            path: 'https://betatest.dictybase.org/scripts/dictyHF/dictyLogo.png',
            href: 'http://dictybase.org/'
        }
        return (
            <StyleRoot>
                <div>
                    <DictyHeader links={ headerLinks } logo={ logo } />
                    <DictyNavbar
                        genomes={ genomes }
                        tools={ tools }
                        explore={ explore }
                        research={ research }
                        community={ community }
                    />
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
