import React, { Component } from 'react'
import LinkList from '../LinkList'
import { PanelBlue } from 'styles'

export default class Links extends Component {
    displayName = 'front page links'
    render() {
        const content = [
            {name: 'Contact the DSC', to: '/contact', routerAware: true},
            {name: 'DSC FAQ', to: '/faq', routerAware: true},
            {name: 'Nomenclature Guide', to: 'https://www.google.com', routerAware: false},
            {name: 'Other Stock Centers', to: '/other', routerAware: true}
        ]
        return (
            <PanelBlue>
                <LinkList list={ content }/>
            </PanelBlue>
        )
    }
}

