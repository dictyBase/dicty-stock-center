import React, { Component } from 'react'
import LinkList from '../LinkList'
import { PanelBlue } from 'styles'

export default class Links extends Component {
    displayName = 'front page links'
    render() {
        const content = [
            {name: 'Contact the DSC', to: '/contact', routerAware: true},
            {name: 'DSC FAQ', to: '/faq/information', routerAware: true},
            {name: 'Nomenclature Guide', to: '/nomenclature/information', routerAware: false},
            {name: 'Other Stock Centers', to: '/other-stock-centers/information', routerAware: true}
        ]
        return (
            <PanelBlue>
                <LinkList list={ content }/>
            </PanelBlue>
        )
    }
}

