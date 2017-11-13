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

    renderChildren = () => {
        const { children, order, orderActions, cart } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                order: order,
                orderActions: orderActions,
                cart: cart
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Route exact path="shipping" component={ Shipping } />
                <Route exact path="shipping/edit" component={ EditShipping } />
                <Route exact path="payment" component={ Payment } />
                <Route exact path="payment/edit" component={ EditPayment } />
                <Route exact path="submit" component={ Submit } />
                <Route exact path="submitting" component={ SubmitLoader } />
                <Route exact path="submitted" component={ OrderConfirmation } />
            </div>
        )
    }
}
