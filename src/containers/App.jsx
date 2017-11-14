import React, { Component, PropTypes } from 'react'
import { Footer } from 'dicty-components-header-footer'
import DictyNavbar from 'components/DictyNavbar'
import DictyHeader from 'components/DictyHeader'
import Cart from 'components/Cart'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium'
import { bindActionCreators } from 'redux'
import * as authActionCreators from 'actions/auth'
import * as shippingActionCreators from 'actions/order/shipping'
import * as paymentActionCreators from 'actions/order/payment'
import * as submitActionCreators from 'actions/order/submit'
import * as pageActionCreators from 'actions/page'
import * as dscActionsCreators from 'actions/stockCenter'
import * as cartActionCreators from 'actions/cart'
import { routerActions } from 'react-router-redux'

class App extends Component {
    displayName = 'the primary app component';
    static propTypes = {
        auth: PropTypes.object.isRequired,
        authActions: PropTypes.object.isRequired,
        stockCenter: PropTypes.object.isRequired,
        stockCenterActions: PropTypes.object.isRequired
    };
    renderChildren = () => {
        const { children } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {...this.props})
        })
    };
    render() {
        const siteMap = [
            [
                {
                    header: {description: 'Genomes Home', link: '/genomes'},
                    items: []
                }
            ],
            [
                {
                    header: {description: 'Tools Home', link: '/tools'},
                    items: [
                        {description: 'New Genome Browser', link: '/tools/jbrowse'}
                    ]
                }
            ],
            [
                {
                    header: {description: 'Explore Home', link: '/explore'},
                    items: [
                        {description: 'Dicty Art', link: '/explore/art'},
                        {description: 'Gallery', link: '/explore/gallery'},
                        {description: 'Genome Resources', link: '/explore/resources'},
                        {description: 'Genome Statistics', link: '/explore/statistics'},
                        {description: 'Learn About Dicty', link: '/explore/learn'},
                        {description: 'Teaching Protocols', link: '/explore/teach'},
                        {description: 'Useful Links', link: '/explore/links'}
                    ]
                }
            ],
            [
                {
                    header: {description: 'Research Home', link: '/research'},
                    items: [
                        {description: 'Anatomy Ontology', link: '/research/ontology'},
                        {description: 'Codon Bias Table', link: '/research/codon'},
                        {description: 'Nomenclature Guidelines', link: '/research/nomenclature'},
                        {description: 'Phenotyping', link: '/research/phenotyping'},
                        {description: 'Techniques', link: '/research/techniques'}
                    ]
                }
            ],
            [
                {
                    header: {description: 'Stock Center Home', link: '/stockcenter'},
                    items: []
                },
                {
                    header: {description: 'Community Home', link: '/community'},
                    items: [
                        {description: 'Cite Us', link: '/citation'},
                        {description: 'Dicty Annual Conferences', link: '/community/conference'},
                        {description: 'Dicty Email Forum', link: '/community/listserv'},
                        {description: 'Dicty Labs', link: '/community/labs'},
                        {description: 'History', link: '/community/history'},
                        {description: 'Jobs', link: '/community/jobs'},
                        {description: 'Upcoming Meetings', link: '/community/meetings'}
                    ]
                }
            ],
            [
                {
                    header: {description: 'Please Cite:', link: '#'},
                    items: [
                        {description: 'dictyBase', link: 'http://www.ncbi.nlm.nih.gov/pubmed/23172289'},
                        {description: 'Dicty Stock Center', link: 'http://www.ncbi.nlm.nih.gov/pubmed/23494302'}
                    ]
                },
                {
                    header: {description: 'Supported By:', link: '#'},
                    items: [
                        {description: 'NIH', link: 'https://www.nih.gov/'},
                        {description: 'GMOD', link: 'http://gmod.org/wiki/Main_Page'},
                        {description: 'Gene Ontology', link: 'http://geneontology.org/'}
                    ]
                }
            ]
        ]
        return (
            <StyleRoot>
                <div>
                    <DictyHeader
                      auth={ this.props.auth }
                      authActions={ this.props.authActions }
                    />
                    {/* <DictyNavbar items={ siteMap } /> */}
                    <Cart cart={ this.props.cart }/>
                    { this.renderChildren() }
                    <Footer items={ siteMap } />
                </div>
            </StyleRoot>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { auth, order, page, stockCenter, cart } = state
    return {
        auth: auth,
        routeProps: ownProps,
        order: order,
        page: page,
        stockCenter: stockCenter,
        cart: cart
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
        routerActions: bindActionCreators(routerActions, dispatch),
        stockCenterActions: bindActionCreators(dscActionsCreators, dispatch),
        cartActions: bindActionCreators(cartActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
