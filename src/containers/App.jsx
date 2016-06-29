import React, { Component, PropTypes } from 'react'
import DictyNavbar from 'components/DictyNavbar'
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
        return (
            <div>
                <StyleRoot>
                    <DictyNavbar
                        genomes={ genomes }
                        tools={ tools }
                        explore={ explore }
                        research={ research }
                        community={ community }
                    />
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
