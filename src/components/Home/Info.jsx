import React, { Component } from 'react'
import LinkList from '../LinkList'
import { PanelBlue } from 'styles'

export default class Info extends Component {
    displayName = 'links to info pages'
    render() {
        const info = [
            {name: 'Order Information', to: '/orders/information', routerAware: true},
            {name: 'Payment Information', to: '/payments/information', routerAware: true},
            {name: 'Deposit Information', to: '/deposits/information', routerAware: true}
        ]
        return (
            <PanelBlue>
                <LinkList list={ info }/>
            </PanelBlue>
        )
    }
}

