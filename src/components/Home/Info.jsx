import React, { Component } from 'react'
import LinkList from '../LinkList'
import { PanelBlue } from 'styles'

export default class Info extends Component {
    displayName = 'links to info pages'
    render() {
        const info = [
            {name: 'Order Information', to: '/information/orders', routerAware: true},
            {name: 'Payment Information', to: '/information/payments', routerAware: true},
            {name: 'Deposit Information', to: '/information/deposits', routerAware: true}
        ]
        return (
            <PanelBlue>
                <LinkList list={ info }/>
            </PanelBlue>
        )
    }
}

