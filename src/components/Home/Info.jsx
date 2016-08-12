import React, { Component } from 'react'
import LinkList from '../LinkList'
import 'styles/custom.scss'

export default class Info extends Component {
    displayName = 'links to info pages'
    render() {
        const info = [
            {name: 'Order Information', to: '/orders/information', routerAware: true},
            {name: 'Payment Information', to: '/payments/information', routerAware: true},
            {name: 'Deposit Information', to: '/deposits/information', routerAware: true}
        ]
        return (
            <div className="panel-dsc panel-blue">
                <LinkList list={ info }/>
            </div>
        )
    }
}

