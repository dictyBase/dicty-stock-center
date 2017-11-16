import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'styles/core.scss'

import Shipping from 'components/form/Shipping'
import EditShipping from 'components/form/EditShipping'
import Payment from 'components/form/Payment'
import EditPayment from 'components/form/EditPayment'
import Submit from 'components/form/Submit'
import SubmitLoader from 'components/form/SubmitLoader'
import OrderConfirmation from 'components/OrderConfirmation'

export default class Order extends Component {
    displayName = 'order parent component'

    // renderChildren = () => {
    //     const { children, order, orderActions, cart } = this.props
    //     return React.Children.map(children, (child) => {
    //         return React.cloneElement(child, {
    //             order: order,
    //             orderActions: orderActions,
    //             cart: cart
    //         })
    //     })
    // }

    render() {
        return (
            <div className="container">
                <Route exact path="/shipping" render={ () => <Shipping {...this.props} /> } />
                <Route exact path="/shipping/edit" render={ () => <EditShipping {...this.props} /> } />
                <Route exact path="/payment" render={ () => <Payment {...this.props} /> } />
                <Route exact path="/payment/edit" render={ () => <EditPayment {...this.props} /> } />
                <Route exact path="/submit" render={ () => <Submit {...this.props} /> } />
                <Route exact path="/submitting" render={ () => <SubmitLoader {...this.props} /> } />
                <Route exact path="/submitted" render={ () => <OrderConfirmation {...this.props} /> } />
            </div>
        )
    }
}
