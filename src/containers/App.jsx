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
                    {name: 'Genomes Home', href: '/genomes'}
                ]
            },
            {
                name: 'Tools',
                links: [
                    {name: 'Tools Home', href: '/tools'},
                    {name: 'New Genome Browser', href: '/tools/jbrowse'}
                ]
            },
            {
                name: 'Explore',
                links: [
                    {name: 'Explore Home', href: '/explore'},
                    {name: 'Dicty Art', href: '/explore/art'},
                    {name: 'Gallery', href: '/explore/gallery'},
                    {name: 'Genome Resources', href: '/explore/resources'},
                    {name: 'Genome Statistics', href: '/explore/statistics'},
                    {name: 'Learn About Dicty', href: '/explore/learn'},
                    {name: 'Teaching Protocols', href: '/explore/teach'},
                    {name: 'Useful Links', href: '/explore/links'}
                ]
            },
            {
                name: 'Research',
                links: [
                    {name: 'Research Home', href: '/research'},
                    {name: 'Anatomy Ontology', href: '/research/ontology'},
                    {name: 'Codon Bias Table', href: '/research/codon'},
                    {name: 'Nomenclature Guidelines', href: '/research/nomenclature'},
                    {name: 'Phenotyping', href: '/research/phenotyping'},
                    {name: 'Techniques', href: '/research/techniques'}
                ]
            },
            {
                name: 'Dicty Stock Center',
                links: [
                    {name: 'Stock Center Home', href: '/stockcenter'}
                ]
            },
            {
                name: 'Community',
                links: [
                    {name: 'Community Home', href: '/community'},
                    {name: 'Cite Us', href: '/citation'},
                    {name: 'Dicty Annual Conferences', href: '/community/conference'},
                    {name: 'Dicty Email Forum', href: '/community/listserv'},
                    {name: 'Dicty Labs', href: '/community/labs'},
                    {name: 'History', href: '/community/history'},
                    {name: 'Jobs', href: '/community/jobs'},
                    {name: 'Upcoming Meetings', href: '/community/meetings'}
                ]
            }
        ]
        return (
            <StyleRoot>
                <div>
                    <DictyHeader
                      auth={ this.props.auth }
                      authActions={ this.props.authActions }
                    />
                    <DictyNavbar items={ siteMap } />
                    { this.renderChildren() }
                    <DictyFooter items={ siteMap } />
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
